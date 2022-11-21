import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import africa from '../../assets/africa.png';
import asia from '../../assets/asia.png';
import australia from '../../assets/australia.png';
import europe from '../../assets/europe.png';
import north from '../../assets/north-america.png';
import south from '../../assets/south-america.png';

const Categories = ({ continentData }) => {
  const alldata = continentData;
  const african = alldata.filter((data) => data.Continent === 'Africa');
  const asian = alldata.filter((data) => data.Continent === 'Asia');
  const australian = alldata.filter(
    (data) => data.Continent === 'Australia/Oceania',
  );
  const european = alldata.filter((data) => data.Continent === 'Europe');
  const northamerica = alldata.filter((data) => data.Continent === 'North America');
  const southamerica = alldata.filter((data) => data.Continent === 'South America');

  const getAfricaTotalCases = () => {
    let total = 0;
    african.forEach((country) => {
      total += country.TotalCases;
    });
    return total;
  };

  const getAsiaTotalCases = () => {
    let total = 0;
    asian.forEach((country) => {
      total += country.TotalCases;
    });
    return total;
  };

  const getAustraliaTotalCases = () => {
    let total = 0;
    australian.forEach((country) => {
      total += country.TotalCases;
    });
    return total;
  };

  const getEuropeTotalCases = () => {
    let total = 0;
    european.forEach((country) => {
      total += country.TotalCases;
    });
    return total;
  };

  const getNorthTotalCases = () => {
    let total = 0;
    northamerica.forEach((country) => {
      total += country.TotalCases;
    });
    return total;
  };

  const getSouthTotalCases = () => {
    let total = 0;
    southamerica.forEach((country) => {
      total += country.TotalCases;
    });
    return total;
  };

  return (
    <section className="categories py-5">
      <h3 className="uppercase mb-2 text-cente">Stats by Continent</h3>
      <ul className="category-list flex flex-col gap-3">
        <li className="list-items pl-3 flex">
          <div className="card flex justify-evenly items-center">
            <div className="card-body w-[60%]">
              <h4 className="font-bold text-4xl">Africa</h4>
              <p>
                Total Cases:
                {' '}
                {getAfricaTotalCases()}
              </p>
              <div className="actions">
                <Link to="/">View More</Link>
              </div>
            </div>
            <div className="card-img w-[40%]">
              <img src={africa} alt="Africa map" className="w-44 opacity-40" />
            </div>
          </div>
        </li>

        <li className="list-items pl-3 flex items-center">
          <div className="card flex justify-evenly items-center">
            <div className="card-body w-[60%]">
              <h4 className="font-bold text-4xl">Asia</h4>
              <p>
                Total Cases:
                {' '}
                {getAsiaTotalCases()}
              </p>
              <div className="actions">
                <Link to="/">View More</Link>
              </div>
            </div>
            <div className="card-img w-[40%]">
              <img src={asia} alt="Africa map" className="w-44 opacity-40" />
            </div>
          </div>
        </li>

        <li className="list-items pl-3 flex items-center">
          <div className="card flex justify-evenly items-center">
            <div className="card-body w-[60%]">
              <h4 className="font-bold text-2xl">Australia & Oceania</h4>
              <p>
                Total Cases:
                {' '}
                {getAustraliaTotalCases()}
              </p>
              <div className="actions">
                <Link to="/">View More</Link>
              </div>
            </div>
            <div className="card-img w-[40%]">
              <img
                src={australia}
                alt="Africa map"
                className="w-36 opacity-40"
              />
            </div>
          </div>
        </li>

        <li className="list-items pl-3 flex items-center">
          <div className="card flex justify-evenly items-center">
            <div className="card-body w-[60%]">
              <h4 className="font-bold text-2xl">Europe</h4>
              <p>
                Total Cases:
                {' '}
                {getEuropeTotalCases()}
              </p>
              <div className="actions">
                <Link to="/">View More</Link>
              </div>
            </div>
            <div className="card-img w-[40%]">
              <img
                src={europe}
                alt="Africa map"
                className="w-36 opacity-40"
              />
            </div>
          </div>
        </li>

        <li className="list-items pl-3 flex items-center">
          <div className="card flex justify-evenly items-center">
            <div className="card-body w-[60%]">
              <h4 className="font-bold text-2xl">North America</h4>
              <p>
                Total Cases:
                {' '}
                {getNorthTotalCases()}
              </p>
              <div className="actions">
                <Link to="/">View More</Link>
              </div>
            </div>
            <div className="card-img w-[40%]">
              <img
                src={north}
                alt="Africa map"
                className="w-36 opacity-40"
              />
            </div>
          </div>
        </li>

        <li className="list-items pl-3 flex items-center">
          <div className="card flex justify-evenly items-center">
            <div className="card-body w-[60%]">
              <h4 className="font-bold text-2xl">South America</h4>
              <p>
                Total Cases:
                {' '}
                {getSouthTotalCases()}
              </p>
              <div className="actions">
                <Link to="/">View More</Link>
              </div>
            </div>
            <div className="card-img w-[40%]">
              <img
                src={south}
                alt="Africa map"
                className="w-36 opacity-40"
              />
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

Categories.propTypes = {
  continentData: PropTypes.shape([]).isRequired,
};

export default Categories;
