/* eslint-disable react/require-default-props */
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import PropTypes from 'prop-types';
import React from 'react';

const Country = ({ countryData }) => {
  const countries = countryData || [];
  const columns = [
    { field: 'Country', header: 'Country' },
    { field: 'TotalCases', header: 'Total Cases' },
    { field: 'NewCases', header: 'New Cases' },
    { field: 'Critical', header: 'Critical' },
    { field: 'ActiveCases', header: 'Active Cases' },
    { field: 'TotalDeaths', header: 'Total Deaths' },
    { field: 'Recovered', header: 'Recovered' },
  ];

  const specific = countries.map((country) => ({
    Country: country.country,
    TotalCases: country.cases,
    NewCases: country.todayCases,
    Critical: country.critical,
    ActiveCases: country.active,
    TotalDeaths: country.deaths,
    Recovered: country.recovered,
  }));

  const dynamicCols = columns.map((col) => (
    <Column key={col.field} field={col.field} header={col.header} sortable />
  ));

  return (
    <div className="mb-5">
      <div className=" px-2">
        {specific && (
          <DataTable
            value={specific}
            responsiveLayout="scroll"
            header="All Countries"
            showGridlines
            className="data-table"
          >
            {dynamicCols}
          </DataTable>
        )}
      </div>
    </div>
  );
};

Country.propTypes = {
  countryData: PropTypes.arrayOf(PropTypes.shape({}).isRequired),
};

export default Country;
