import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { IoArrowBackOutline } from 'react-icons/io5';
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

  const TotalCases = () => {
    let total = 0;
    contData?.forEach((country) => {
      total += country.TotalCases;
    });
    return total;
  };

  const ActiveCases = () => {
    let total = 0;
    contData?.forEach((country) => {
      total += country.ActiveCases;
    });
    return total;
  };

  const TotalDeaths = () => {
    let total = 0;
    contData?.forEach((country) => {
      total += country.TotalDeaths;
    });
    return total;
  };

  const NewCases = () => {
    let total = 0;
    contData?.forEach((country) => {
      total += country.NewCases;
    });
    return total;
  };

  const Critical = () => {
    let total = 0;
    contData?.forEach((country) => {
      total += country.Serious_Critical;
    });
    return total;
  };

  const NewDeaths = () => {
    let total = 0;
    contData?.forEach((country) => {
      total += country.NewDeaths;
    });
    return total;
  };

  useEffect(() => {
    dispatch(getContinentData(continent));
  }, []);

  return (
    <>
      <header className="flex relative justify-evenly items-center h-[12rem]">
        <Link to="/dashboard" className="back-btn border z-50 p-1 rounded-full absolute top-5 right-5">
          <span>
            <IoArrowBackOutline />
          </span>
        </Link>
        {continent === 'australia' ? (
          <h3 className="w-[50%] text-center text-xl font-bold">
            {changeName()}
          </h3>
        ) : (
          <h3 className="w-[50%] text-center text-4xl font-bold">
            {changeName()}
          </h3>
        )}
        <div className="cont-img w-[50%] h-[10rem] flex justify-center overflow-hidden">
          <img src={changeImg()} alt="" className="opacity-25" />
        </div>
      </header>
      <section className="mt-3 flex flex-wrap justify-center gap-4 p-2">
        <div className="total-cases flex flex-col justify-center h-[6rem] text-center rounded p-5 w-[10rem]">
          <span className="font-bold text-xl text-green-300">
            {TotalCases()}
          </span>
          <span>Total Cases</span>
        </div>
        <div className="total-cases flex flex-col justify-center h-[6rem] text-center rounded p-5 w-[10rem]">
          <span className="font-bold text-xl text-yellow-100">
            {ActiveCases()}
          </span>
          <span>Active Cases</span>
        </div>
        <div className="total-cases flex flex-col justify-center h-[6rem] rounded p-5 text-center w-[10rem]">
          <span className="font-bold text-xl text-red-800">
            {TotalDeaths()}
          </span>
          <span>Total Deaths</span>
        </div>
        <div className="total-cases flex flex-col justify-center h-[6rem] rounded p-5 text-center w-[10rem]">
          <span className="font-bold text-xl text-green-300">{NewCases()}</span>
          <span>New Cases</span>
        </div>
        <div className="total-cases flex flex-col justify-center h-[6rem] rounded p-5 text-center w-[10rem]">
          <span className="font-bold text-xl text-yellow-500">
            {Critical()}
          </span>
          <span>Critical</span>
        </div>
        <div className="total-cases flex flex-col justify-center h-[6rem] rounded p-5 text-center w-[10rem]">
          <span className="font-bold text-xl text-red-800">{NewDeaths()}</span>
          <span>New Deaths</span>
        </div>
      </section>
    </>
  );
};

export default Details;
