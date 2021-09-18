import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import Filter from './components/Filter'
import List from './components/List';
import { useEffect, useState } from 'react';
import SlideShow from './components/SlideShow';
import { useDispatch } from "react-redux";
import { setAll } from "./redux/computer";



function App() {
  const [list, setList] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setAll());
    setList([
      {
        img: 'https://www.scoop.com.tn/25020-large_default/pc-portable-hp-quad-core-i5-10e-gen-ecran-156-noir.jpg',
        title: 'HP',
        Descreption: 'Pc Portable HP Quad Core i5 10é Gén, Ecran 15.6 - Noir',
      },
      {
        img: 'https://www.abenson.com/media/catalog/product/cache/1801c418208f9607a371e61f8d9184d9/1/7/175877_2020_1.jpg',
        title: 'Lenevo',
        Descreption: 'Lenovo IdeaPad 5 82LM002UPH Platinum Grey',
      },
      {
        img: 'https://cdn.cnetcontent.com/syndication/mediaserverredirect/ad0df6afd0181e8da193714f3cdc62ba/original.jpg',
        title: 'Dell',
        Descreption: 'Dell Latitude 3000 3320 13.3 Notebook 1920x1080 Intel Core i3 11th Gen i3 1115G4 Dual core 3GHz ',
      },
      {
        img: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6464/6464203_sd.jpg',
        title: 'ASUS',
        Descreption: 'ASUS - ROG 16" WQXGA 165Hz Gaming Laptop - Intel Core i9 - 16GB Memory - NVIDIA RTX3060 - 1TB SSD - Off Black',
      },
      {
        img: 'https://www.ubuy.tn/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzE4M1Nqa3JTbkwuX0FDX1NMMTUwMF8uanBn.jpg',
        title: 'Predator',
        Descreption: 'Predator Helios 300 Gaming Laptop, Intel i7-10750H, NVIDIA GeForce RTX 3060 Laptop GPU, 15.6 Full HD 144Hz',
      },
      {
        img: 'https://m.media-amazon.com/images/I/615yomudZSL._AC_SS450_.jpg',
        title: 'Alienware',
        Descreption: 'Dell Alienware M17 R2 Gaming Laptop 17.3 Inch FHD 256GB SSD 2.4GHz i5',
      },
     
    ])


    return () => {

    }
  }, [])

  return (
    <Container fluid>
      <Row>
        <Col xs='auto'>
          <Filter />
        </Col>
        <Col>
          <SlideShow/>
          <List list={list} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
