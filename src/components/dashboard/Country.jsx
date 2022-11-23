/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const Country = ({ countryData }) => {
  const complete = countryData || [];
  const countries = complete.filter((country) => country.rank !== 0);
  const columns = [
    { field: 'Country', header: 'Country' },
    { field: 'TotalCases', header: 'Total Cases' },
    { field: 'NewCases', header: 'New Cases' },
    { field: 'Critical', header: 'Critical' },
    { field: 'ActiveCases', header: 'Active Cases' },
    { field: 'TotalDeaths', header: 'Total Deaths' },
    { field: 'NewDeaths', header: 'New Deaths' },
  ];

  const specific = countries.map((country) => ({
    Country: country.Country,
    TotalCases: country.TotalCases,
    NewCases: country.NewCases,
    Critical: country.Serious_Critical,
    ActiveCases: country.ActiveCases,
    TotalDeaths: country.TotalDeaths,
    NewDeaths: country.NewDeaths,
  }));

  const dynamicCols = columns.map((col) => (
    <Column key={col.field} field={col.field} header={col.header} sortable />
  ));

  return (
    <div className="mb-5">
      <div className=" px-2">
        {specific && (
          <DataTable value={specific} responsiveLayout="scroll" header="All Countries" showGridlines className="data-table">
            {dynamicCols}
          </DataTable>
        )}
      </div>
    </div>
  );
};

Country.propTypes = {
  countryData: PropTypes.shape([]),
};

export default Country;
