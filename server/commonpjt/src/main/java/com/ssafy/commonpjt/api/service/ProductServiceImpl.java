package com.ssafy.commonpjt.api.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.commonpjt.api.dto.productDTO.*;
import com.ssafy.commonpjt.db.entity.Building;
import com.ssafy.commonpjt.db.entity.Options;
import com.ssafy.commonpjt.db.entity.Product;
import com.ssafy.commonpjt.db.entity.User;
import com.ssafy.commonpjt.db.repository.BuildingRepository;
import com.ssafy.commonpjt.db.repository.OptionsRepository;
import com.ssafy.commonpjt.db.repository.ProductRepository;
import com.ssafy.commonpjt.db.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@Slf4j
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private BuildingRepository buildingRepository;
    @Autowired
    private OptionsRepository optionsRepository;
    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private ObjectMapper objectMapper;

    private Product findProductByAddress(String productDetail, String jibunAddress){
        return productRepository.findByProductDetailAndBuildingBuildingAddress(productDetail, jibunAddress);
    }
    @Override
    public boolean addProduct(int userIndex, List<MultipartFile> fileList, ProductDTO productDTO, BuildingDTO buildingDTO, OptionsDTO optionsDTO) throws Exception {
        String productDetail = productDTO.getProductDetail();
        String jibunAddress = buildingDTO.getBuildingJibunAddress();
        Product product = findProductByAddress(productDetail, jibunAddress);
        
        //매물 정보 중복
        if(product!=null) return false;
        
        //매물 정보 없음 -> 매물 정보 저장
        StringBuilder imageFilePathListStr = new StringBuilder();      //구분자 -> ,

        //이미지 파일 저장
        //TODO : 프로젝트 파일에 넣을건지, 배포 하면 절대경로에서 상대경로로 바꿔야됨
        //경로 -> product/img/productRoadAddress/productDetail/i.png
        StringBuilder sb = new StringBuilder("C:/D106/product/img/");
        for(int i=0, size=fileList.size(); i<size; i++){
            StringBuilder tmpSb = new StringBuilder(sb.toString());
            tmpSb.append(buildingDTO.getBuildingRoadAddress())
                    .append("/")
                    .append(productDTO.getProductDetail())
                    .append("/");
            Path path = Paths.get(tmpSb.toString());
            Files.createDirectories(path);
            tmpSb.append(i).append(".png");

            imageFilePathListStr.append(tmpSb.toString());
            //마지막 파일이 아니면 구분자 추가
            if(i!=size-1){
                imageFilePathListStr.append(",");
            }

            File convFile = new File(tmpSb.toString());
            convFile.createNewFile();
            FileOutputStream fos = new FileOutputStream(convFile);
            fos.write(fileList.get(i).getBytes());
            fos.close();
        }
        Building building = buildingRepository.findByBuildingAddress(buildingDTO.getBuildingJibunAddress());
        if (building == null) {
            building = new Building().builder()
                    .buildingAddress(buildingDTO.getBuildingJibunAddress())
                    .buildingElevator(buildingDTO.getBuildingElevator() == 1)
                    .buildingName(buildingDTO.getBuildingName())
                    .buildingParking(buildingDTO.getBuildingParking() == 1)
                    .buildingRoadAddress(buildingDTO.getBuildingRoadAddress())
                    .build();
            buildingRepository.save(building);
        }
        Options options = new Options().builder()
                .optionAirConditioner(optionsDTO.getOptionAirConditioner() == 1)
                .optionBed(optionsDTO.getOptionBed() == 1)
                .optionCloset(optionsDTO.getOptionCloset() == 1)
                .optionDesk(optionsDTO.getOptionDesk() == 1)
                .optionFridge(optionsDTO.getOptionFridge() == 1)
                .optionInduction(optionsDTO.getOptionInduction() == 1)
                .optionMicroWave(optionsDTO.getOptionMicrowave() == 1)
                .optionWashingMachine(optionsDTO.getOptionWashingMachine() == 1)
                .optionWifi(optionsDTO.getOptionWifi() == 1)
                .build();
        optionsRepository.save(options);

        User productSeller = userRepository.findByUserIndex(userIndex);
        product = new Product().builder()
                .building(building)
                .options(options)
                .productSeller(productSeller)
                .productDetail(productDTO.getProductDetail())
                .productFloor(productDTO.getProductFloor())
                .productType(productDTO.getProductType())
                .productPrice(productDTO.getProductPrice())
                .productManageCost(productDTO.getProductManageCost())
                .productSize(productDTO.getProductSize())
                .productRooms(productDTO.getProductRooms())
                .productDirection(productDTO.getProductDirection())
                .productPhoto(imageFilePathListStr.toString())
                .productAnimal(productDTO.getProductAnimal())
                .productSeller(productSeller)
                .build();
        productRepository.save(product);

        int[] output = new int[3];
        output[0] = product.getProductIndex();
        output[1] = building.getBuildingIndex();
        output[2] = options.getOptionIndex();
        return true;
    }

    //entity -> dto
    private <DTO, ENTITY> DTO parseFromEntityToDTO(ENTITY entity, Class<DTO> className){
        return modelMapper.map(entity, className);
    }

    @Override
    public ProductDetailDTO detailProduct(int productIndex) throws JsonProcessingException {
        Product product = productRepository.findByProductIndex(productIndex);

        if (product == null) {
            return null;
        }

        ProductDetailDTO productDetailDTO = new ProductDetailDTO();

        //product to json string
        ProductDTO productDTO = modelMapper.map(product, ProductDTO.class);
        productDetailDTO.setProduct(productDTO);

        //building to json string
        int buildingIndex = product.getBuilding().getBuildingIndex();
        Building buildingEntity = buildingRepository.findByBuildingIndex(buildingIndex);
        BuildingDTO building = parseFromEntityToDTO(buildingEntity, BuildingDTO.class);
        productDetailDTO.setBuilding(building);

        //options to json string
        int optionIndex = product.getOptions().getOptionIndex();
        Options optionsEntity = optionsRepository.findByOptionIndex(optionIndex);
        OptionsDTO options = parseFromEntityToDTO(optionsEntity, OptionsDTO.class);
        productDetailDTO.setOptions(options);

        //seller to json string
        int sellerIndex = product.getProductSeller().getUserIndex();
        User seller = userRepository.findByUserIndex(sellerIndex);
        ProductSellerDTO productSellerDTO = parseFromEntityToDTO(seller, ProductSellerDTO.class);
        productDetailDTO.setSeller(productSellerDTO);

        return productDetailDTO;
    }

//    @Override
    public int updateProduct(ProductDTO productDTO, BuildingDTO buildingDTO, OptionsDTO optionsDTO) {
//        Product product = productRepository.findByProductIndex(productDTO.getProductIndex());
////        Product product = productRepository.findByProductIndex(productIndex);
//        if (product == null) {
//            return 204;
//        } else {
//            Building building = buildingRepository.findByBuildingIndex(buildingDTO.getBuildingIndex());
//            Options options = optionsRepository.findByOptionIndex(optionsDTO.getOptionIndex());
//            building.setBuildingAddress(buildingDTO.getBuildingJibunAddress());
//            building.setBuildingElevator(buildingDTO.getBuildingElevator() == 1);
//            building.setBuildingName(buildingDTO.getBuildingName());
//            building.setBuildingParking(buildingDTO.getBuildingParking() == 1);
//            building.setBuildingRoadAddress(buildingDTO.getBuildingRoadAddress());
//            options.setOptionAirConditioner(optionsDTO.getOptionAirConditioner() == 1);
//            options.setOptionBed(optionsDTO.getOptionBed() == 1);
//            options.setOptionCloset(optionsDTO.getOptionCloset() == 1);
//            options.setOptionDesk(optionsDTO.getOptionDesk() == 1);
//            options.setOptionFridge(optionsDTO.getOptionFridge() == 1);
//            options.setOptionInduction(optionsDTO.getOptionInduction() == 1);
//            options.setOptionMicroWave(optionsDTO.getOptionMicroWave() == 1);
//            options.setOptionWashingMachine(optionsDTO.getOptionWashingMachine() == 1);
//            options.setOptionWifi(optionsDTO.getOptionWifi() == 1);
//            //TODO: Product Entity에 User 추가하기
//            //TODO: Product Entity에 photo 추가하기
//
////            이거 안 됨 ?
////            User user = product.getUser();
//            User productSeller = userRepository.findByUserIndex(product.getProductSeller().getUserIndex());
//            product.setBuilding(building);
//            product.setOptions(options);
//            product.setProductSeller(productSeller);
//            product.setProductDetail(productDTO.getProductDetail());
//            product.setProductFloor(productDTO.getProductFloor());
//            product.setProductType(productDTO.getProductType());
//            product.setProductPrice(productDTO.getProductPrice());
//            product.setProductManageCost(productDTO.getProductManageCost());
//            product.setProductSize(productDTO.getProductSize());
//            product.setProductRooms(productDTO.getProductRooms());
//            product.setProductDirection(productDTO.getProductDirection());
////            product.setProductPhoto(productDTO.getProductPhoto());
//            product.setProductAnimal(productDTO.getProductAnimal());
//
            return 200;
//        }
    }

    @Override
    public boolean deleteProduct(int productIndex) throws Exception, SecurityException {
        Product product = productRepository.findByProductIndex(productIndex);

        //매물 정보 없음
        if (product == null) {
            return false;
        }

        //파일 삭제
        String[] productStr = product.getProductPhoto().split(",");  //파일 string을 parsing
        String[] oneImagePathStr = productStr[0].split("/");         //파일 디렉토리 정보를 위해 파싱

        StringBuilder imageDirectoryPath = new StringBuilder();
        for(int i=0; i<oneImagePathStr.length-1; i++){
            log.info("directory path " + oneImagePathStr[i]);
            imageDirectoryPath.append(oneImagePathStr[i]);
            if(i< oneImagePathStr.length-2){
                imageDirectoryPath.append("/");
            }
        }
        String directoryPathStr = imageDirectoryPath.toString();    //이미지의 부모 디렉토리 정보

        File directory = new File(directoryPathStr);

        //디렉토리가 존재하는지
        if(!directory.exists()) {
            throw new SecurityException();
        }
        //디렉토리인지
        if(!directory.isDirectory()){
            throw new SecurityException();
        }

        File[] imageFiles = directory.listFiles();
        for(File image : imageFiles){
            image.delete();
        }
        directory.delete();

        productRepository.deleteProductByProductIndex(productIndex);
        return true;
    }

}
