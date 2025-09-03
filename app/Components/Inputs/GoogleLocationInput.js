"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  GoogleMap,
  useJsApiLoader,
  StandaloneSearchBox,
} from "@react-google-maps/api";
import { Box, Text, Input } from "@chakra-ui/react";

const library = ["places"];

function GoogleLocationInputSec({
  labeling,
  placingtext,
  names,
  changes,
  values,
  icon,
  secIcon,
  labelStyle,
  inputStyle,
  secIconFunc,
  showPassword,
  readonly,
  homePassKey,
  register,
  validation,
  error,
  setData,
  pickUpReqData,
  diplayCity,
  setCountry,
  setLocality,
  setState,
}) {
  const [isPlaceSelected, setIsPlaceSelected] = useState(false);

  useEffect(() => {
    setIsPlaceSelected(false); // Reset on value change
  }, [values]);

  const inputRef = useRef(null);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "YOUR_API_KEY", // 🔑 Replace with env var
    libraries: library,
  });

  const [locationPlaceholder, setLocationPlaceholder] = useState("");

  const handleOnPlacesChange = () => {
    setIsPlaceSelected(true);
    let place = inputRef.current.getPlaces()[0];
    if (place) {
      const locationName = place.formatted_address || place.name;
      setLocationPlaceholder(locationName);
      setData && setData({ ...pickUpReqData, [names]: locationName });

      let country = "";
      let state = "";
      let locality = "";

      const addressComponents = place.address_components;
      addressComponents.forEach((component) => {
        if (component.types.includes("country")) {
          country = component.long_name;
        }
        if (component.types.includes("administrative_area_level_1")) {
          state = component.long_name;
        }
        if (component.types.includes("locality")) {
          locality = component.long_name;
        }

        setState && setState({ ...pickUpReqData, state });
        diplayCity && diplayCity(state);
        setLocality && setLocality(locality);
        setCountry && setCountry(country);

        setData &&
          setData(
            { ...pickUpReqData, [names]: locationName },
            country,
            state,
            locality
          );
      });
    }
  };

  return (
    <Box as="form" className="full">
      <Text
        as="label"
        className={`text-[16px] lg:text-[18px] font-semibold ${labelStyle}`}
      >
        {labeling}
      </Text>

      {isLoaded && (
        <StandaloneSearchBox
          onLoad={(ref) => (inputRef.current = ref)}
          onPlacesChanged={handleOnPlacesChange}
          options={{
            componentRestrictions: { country: "NG" },
          }}
        >
          <Box
            border={"1px"}
            borderColor={"gray.300"}
            className="mt-[8px] w-full border-2 rounded-lg  gap-x-2 flex items-center"
          >
            {icon && <Box>{icon}</Box>}

            <Input
              size={["md", "lg"]}
              fontSize={15}
              border="none"
              onInput={changes}
              id={names}
              className={`text-[12px] pl-3 lg:text-[14px] hover:bg-[#CDD8FE] ${
                values ? "bg-[#CDD8FE]" : ""
              } duration-500 ${inputStyle ? inputStyle : "h-[48px]"} w-full`}
              placeholder={placingtext || locationPlaceholder}
              name={names}
              onChange={changes}
              value={values}
              type={showPassword || homePassKey ? "password" : "text"}
              readOnly={readonly ? true : false}
              autoComplete="off"
              data-autocomplete="nope"
            />

            {secIcon ? (
              <Box
                as="button"
                type="button"
                onClick={secIconFunc}
                className={`mr-2 ${showPassword ? "hidden" : ""}`}
              >
                <Image src={secIcon} alt="" />
              </Box>
            ) : (
              ""
            )}
          </Box>
        </StandaloneSearchBox>
      )}

      <Text className="text-red-400 text-[12px] font-semibold">{error}</Text>

      {!isPlaceSelected && (
        <Text className="text-gray-400 lg:text-[12px] text-[12px] font-semibold">
          Please select a location from suggestions.
        </Text>
      )}
    </Box>
  );
}

export default GoogleLocationInputSec;
