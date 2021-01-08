import React, { useCallback } from "react";
import "./styles.css";
import { GlobalStyle } from "./utils";
import { Helmet } from "react-helmet";
import { TestForm } from "./containers/TestForm";
import { RnDDiscounts } from "./pages/RnDDiscounts";
import { AppProvider } from "./containers/AppContext";

export default function App() {
  /*const initialValues = {
    firstName: "Alex",
    lastName: "K.",
    country: "FR",
    zipCode: "12345",
    notes: "Some notes",
    discounts: [
      { from: new Date(), until: new Date(), value: 5.0 },
      { from: new Date(), until: new Date(), value: 5.0 },
      {
        from: new Date(),
        until: new Date(),
        value: 5.0,
        scales: [
          { from: 100000.0, value: 5.0 },
          { from: 200000.0, value: 7.5 },
          { from: 300000.0, value: 10.0 }
        ]
      }
    ]
  };*/
  const initialValues = {
    fixDiscounts: [
      {
        id: "id1",
        validFrom: new Date(),
        validTo: new Date(),
        percentage: 1
      },
      {
        id: "id2",
        validFrom: new Date(),
        validTo: new Date(),
        percentage: 2
      },
      {
        id: "id3",
        validFrom: new Date(),
        validTo: new Date(),
        percentage: 3
      }
    ]
  };
  const submitHandler = useCallback(
    (values) => console.log("submitted", values),
    []
  );

  const countryOptions = [
    { value: null, label: "Select a country" },
    { value: "DE", label: "Deutschland" },
    { value: "GB", label: "Groß Britanien" },
    { value: "FR", label: "Frankreich" }
  ];
  const rootReducer = (state, action) => {
    console.log("rootReducer", state, action);
    return state;
  };

  const sideEffects = [
    (state, action, dispatch) => {
      console.log("sideEffect", state, action);
      dispatch({ type: "loop?" });
    }
  ];
  const initState = {};
  return (
    <AppProvider
      reducer={rootReducer}
      state={initState}
      sideEffects={sideEffects}
    >
      <GlobalStyle />
      <Helmet>
        <style type="text/css">{`@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap');`}</style>
      </Helmet>
      <RnDDiscounts onSubmit={submitHandler} values={initialValues} />
    </AppProvider>
  );
}
/*<TestForm
        values={initialValues}
        onSubmit={submitHandler}
        countries={countryOptions}
      />*/
