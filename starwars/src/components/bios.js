import React, {useState} from "react";
import {characters} from "../App.js";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';



const Bios = (props) => {
  // STEP 2 - add the imported data to state
  // console.log(props.characters);
  const list = props.characters;

  const imgs = ['./img/luke-skywalker.jpg', './img/C3po.jpg', './img/r2-d2.jpg', './img/darth-vader.jpg',
                './img/leia.jpeg', './img/owen_lars.jpg', './img/beru.jpg', './img/r5-d4.jpg', './img/biggs.jpg',
                './img/obi-wan.jpg'];

  // list[0]['img'] = imgs[0];

  const[activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  // console.log(imgs[0]);

  let count = 0;

  list.forEach((id) =>{

    id.img = imgs[count];

    count++

  });
  //  while(count < imgs.length){
  //
  //   // list[count].push({img: imgs[count]});
  //
  //   count++;
  // }


  // console.log(list);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === list.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? list.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = list.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <h2>{item.name}</h2>
        <h3>Born: {item.birth_year}</h3>
        <h3>Sex: {item.gender}</h3>
        <h3>Height: {item.height}cm</h3>
        <h3>Hair Color: {item.hair_color}</h3>
        <h3>Eye Color: {item.eye_color}</h3>

        <img src={process.env.PUBLIC_URL + item.img} alt='test'  />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={list} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );


};

export default Bios;
