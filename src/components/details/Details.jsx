import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getContinentData } from '../../redux/world-data/continentSlice';
import africa from '../../assets/africa.png';
import asia from '../../assets/asia.png';
import australia from '../../assets/australia.png';
import europe from '../../assets/europe.png';
import north from '../../assets/north-america.png';
import south from '../../assets/south-america.png';

const Details = () => {
  const { continent } = useParams();
  const contData = useSelector((state) => state.continent.data);
  const dispatch = useDispatch();

  const changeName = () => {
    let name = '';
    if (continent === 'africa') {
      name = 'Africa';
    } else if (continent === 'asia') {
      name = 'Asia';
    } else if (continent === 'australia') {
      name = 'Australia/Oceania';
    } else if (continent === 'europe') {
      name = 'Europe';
    } else if (continent === 'northamerica') {
      name = 'North America';
    } else {
      name = 'South America';
    }
    return name;
  };

  const changeImg = () => {
    let img;
    if (continent === 'africa') {
      img = africa;
    } else if (continent === 'asia') {
      img = asia;
    } else if (continent === 'australia') {
      img = australia;
    } else if (continent === 'europe') {
      img = europe;
    } else if (continent === 'northamerica') {
      img = north;
    } else {
      img = south;
    }
    return img;
  };

  useEffect(() => {
    dispatch(getContinentData(continent));
  }, []);

  console.log(contData);

  return (
    <>
      <header className="flex justify-evenly items-center h-[12rem]">
        {
          continent === 'australia' ? (<h3 className="w-[50%] text-center text-xl font-bold">{changeName()}</h3>) : (<h3 className="w-[50%] text-center text-4xl font-bold">{changeName()}</h3>)
        }
        <div className="cont-img w-[50%] h-[10rem] flex justify-center overflow-hidden">
          <img src={changeImg()} alt="" className="opacity-25" />
        </div>
      </header>
      <section className="continent">Some text</section>
    </>
  );
};

export default Details;
