import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel'
import React from 'react'
import img1 from "../SlideShow/hp.jpg"
import img2 from "../SlideShow/asus.jpg"
import img3 from "../SlideShow/lenevo.jfif"
import img4 from "../SlideShow/Dell.jfif"

function SlideShow() {


    return (
    <div className='border'>
        <Carousel>
            
            
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-25 mb-3  photo"
                    src={img1}
                    alt="First slide "
                    height = "300"
                />
                <Carousel.Caption>
                    <h3 className='text'>HP</h3>
                    <p className='text'>PC PORTABLE HP 15-dw3015nk i5-1135 G7 15.6HD 8GB 256GB W10H6 Intel Iris XeChalkboard gray Mesh Knit REF 2R0M7EA</p>
                
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-25  photo" 
                    src={img2}
                    alt="Second slide"
                    height = "300"
                    
                />
                <Carousel.Caption>
                    <h3 className='text'>ASUS</h3>
                    <p className='text'>ASUS ZenBook Pro Duo UX581 Laptop, 15.6” 4K UHD NanoEdge Touch Display, Intel Core i7-10750H, 16GB RAM, 1TB PCIe SSD, GeForce RTX 2060, ScreenPad Plus, Windows 10 Pro, Celestial Blue, UX581LV-XS74T </p>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-25 photo"
                    src={img3}
                    alt="Third slide"
                    height = "300"
                />
                <Carousel.Caption interval={500}>
                    <h3 className='text'>Lenevo</h3>
                    <p className='text'>Lenovo Legion 5 Gaming Laptop, 15.6" FHD (1920x1080) IPS Screen, AMD Ryzen 7 4800H Processor, 16GB DDR4, 512GB SSD, NVIDIA GTX 1660Ti, Windows 10, 82B1000AUS, Phantom Black</p>
                   
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-25  photo"
                    src={img4}
                    alt="Third slide"
                    height = "300"
                />
                <Carousel.Caption interval={500}>
                    <h3 className='text'>Dell</h3>
                    <p className='text'>11th Generation Intel® Core™ i3-1115G4,Windows 10 Pro, Intel® UHD graphics for i3-1115G4 processor,4 GB, 1x4 GB 3200MHz DDR4 Non-ECC ,M.2 128GB PCIe NVMe Class 35 Solid State Drive ,15.6-in. display ,Starting at 3.95 lbs ,Customizeable Up to 11th Gen Intel® Core™ i7 processors and optional NVIDIA MX450 graphics.</p>
                    
                </Carousel.Caption>
            </Carousel.Item>
            
          
        </Carousel>
    </div>

    )
}


export default SlideShow
