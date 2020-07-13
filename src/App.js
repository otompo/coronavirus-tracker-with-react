import React, { useState, useEffect } from "react";
//import First from "../src/components/First";
import Logo from "../src/components/Logo";
import "./App.css";
import Card from "./components/Card";
import Row from "./components/Row";
import Card2 from "./components/Card2";
import axios from "axios";

const Axios = axios.default;
const endpoint = "https://gtl-covid-api.herokuapp.com/api/";
const new_endpoint = "https://pase-covid.herokuapp.com";
export default function App1(props) {
  const [data, setData] = useState(null);
  const [summary, setSummary] = useState(null);
  const [search, setSearch] = useState("");
  useEffect(() => {
    Axios.get(`${new_endpoint}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    
    Axios.get(endpoint)
      .then((response) => {
        // let summaryInitial =[]
        let totalActiveInitial = 0;
        let recoveriesInitial = 0;
        let deathsInitial = 0;
        let totalCasesInitial = 0;
        const covidData = response.data["Covid 19 Cases"];
        console.log(covidData[0]);
        covidData.forEach((item, index) => {
          totalActiveInitial = totalActiveInitial + Number(item.Active);
          totalCasesInitial = totalCasesInitial + Number(item.Confirmed);
          recoveriesInitial = recoveriesInitial + Number(item.Recoveries);
          deathsInitial = deathsInitial + Number(item.Deaths);
        });
        setSummary([
          {
            title: "Total Active",
            value: totalActiveInitial,
          },
          {
            title: "Recoveries",
            value: recoveriesInitial,
          },
          {
            title: "Total Deaths",
            value: deathsInitial,
          },
          {
            title: "Total Cases",
            value: totalCasesInitial,
          },
        ]);

        setData(covidData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <input
        onChange={(value) => {
          setSearch(value.target.value);
        }}
        placeholder="Search"
        style={{ width: "150px", height: "30px", border: "1px solid #FF0000" }}
      />
      <button
        onClick={() => {
          if (search.length > 3) {
            Axios.post(`https://hookb.in/xYNE6Q3e8oClVL7LJ1Ja`, {
              search: search,
            }).then((res) => {
              console.log(res.data);
            });
          } else {
            alert("characters should be more than 5");
          }
        }}
        style={{ width: "100px", height: "30px" }}
      >
        Sign Up
      </button>
      <Logo />
      <div
        style={{
          display: "flex",
          position: "relative",
          marginTop: "107px",
          justifyContent: "space-around",
          flexDirection: "row",
          width: "100vw",
        }}
      >
        {summary !== null &&
          summary.map((item, index) => {
            return (
              <Card
                key={index}
                title={item.title}
                value={item.value}
                indicator={require("./assets/redIndicator.png")}
              />
            );
          })}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "50px",
          marginLeft: "22px",
          marginBottom: "50px",
          marginRight: "22px",
          padding: "10px",
        }}
      >
        <div
          style={{
            borderWidth: "1px",
            borderColor: "#FF0000",
            padding: "1px",
            borderStyle: "solid",
          }}
        >
          <Row
            hover={false}
            backgroundColor="rgb(228,228,228)"
            country="Country"
            recoveries="Recoveries"
            deaths="Total Deaths"
            cases="Total Cases"
            active="Total Active"
          />
          {data !== null &&
            data.map((item, index) => {
              return (
                <Row
                  key={index}
                  hover={true}
                  backgroundColor="rgba(255,0,0,0.1)"
                  country={item.Country}
                  recoveries={item.Recoveries}
                  deaths={item.Deaths}
                  cases={item.Confirmed}
                  active={item.Active}
                />
              );
            })}
        </div>
        <div style={{ marginLeft: "103px", paddingRight: "20px" }}>
          <Card2 title="Health Tips" />
          <Card2 title="News Update" />
        </div>
      </div>
    </div>
  );
}
export function App2() {
  return <div>Functional Component</div>;
}
// export default App1;
