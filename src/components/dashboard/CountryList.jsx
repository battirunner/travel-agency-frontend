import React from "react";
import { Select } from "antd";
import { UsergroupAddOutlined } from "@ant-design/icons";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
countries.registerLocale(enLocale);

const CountryList = ({country, onChangeCountry}) => {
  // console.log(country);
  const countryListOptions = Object.entries(
    countries.getNames("en", { select: "official" })
  ).map((country) => ({
    code: country[0].toLowerCase(),
    name: country[1],
  }));

  //   console.log("check the country list", countryListOptions);
  const items = countryListOptions.map((country) => ({
    value: country.name,
    key: country.code,
    label: (
      <>
        <span
          className={`fi fi-${country.code}`}
          style={{ width: "24px", marginRight: "10px" }}
        ></span>
        {country.name}
      </>
    ),
  }));

  const onSelectCountry = (country) => {
    onChangeCountry(country);
  };

  return (
    <>
      <Select
      style={{width:"100%"}}
        size="large"
        defaultValue={country}
        // prefix={<UsergroupAddOutlined />}
        options={items}
        showSearch
        onSelect={onSelectCountry}
      />
    </>
  );
};

export default CountryList;
