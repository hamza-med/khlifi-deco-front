import {
  Menu,
  MenuList,
  MenuItem,
  Input as ChInput,
  MenuDivider,
  useDisclosure,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Controller, useFormContext } from "react-hook-form";
import { useDebounce } from "@/hooks/useDebounce";
import { useEffect, useState } from "react";
import axios from "axios";
import distanceCalc from "@/utils/distanceCalculator";

const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";

const LocationSearch = ({
  label,
  name = "address",
  placeholder,
  control,
  required,
}) => {
  const [searchText, setSearchText] = useState("");
  const [value, setInputValue] = useState("");
  const [placeList, setPlaceList] = useState([]);
  const { setValue } = useFormContext();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [distance, setDistance] = useState();
  console.log(distance);
  console.log(placeList);
  useDebounce(value, setSearchText, 700);

  useEffect(() => {
    const controller = new AbortController();
    const params = {
      city: searchText,
      country: "Tunisia",
      postalcode: 2000,
      state: "Tunis",
      countrycodes: ["tn"],
      format: "json",
      addressdetails: 1,
    };
    const queryString = new URLSearchParams(params).toString();
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    const getPlaces = async () => {
      try {
        const response = await axios(
          `${NOMINATIM_BASE_URL}${queryString}`,
          requestOptions
        );
        setPlaceList(response?.data);
      } catch (e) {
        console.log(e.message);
      }
    };
    getPlaces();
    return () => controller.abort();
  }, [searchText]);
  console.log("places list", placeList);

  return (
    <div>
      {name && (
        <Controller
          name={name}
          id={name}
          control={control}
          render={({
            field: { onBlur, onChange, value, ref },
            fieldState: { error },
          }) => {
            console.log(value);
            return (
              <div className="billing__input" style={{ position: "relative" }}>
                <FormControl isRequired={required} isInvalid={!!error?.message}>
                  <FormLabel htmlFor="name">{label}</FormLabel>
                  <ChInput
                    value={value}
                    inputRef={ref}
                    onBlur={onBlur}
                    placeholder={placeholder}
                    onChange={(e) => {
                      onChange(e);
                      setInputValue(e.target.value);
                      onOpen();
                    }}
                    bgColor="white"
                    borderColor="#9F9F9F"
                  />
                  <FormErrorMessage>{error?.message}</FormErrorMessage>
                </FormControl>
                {placeList?.length !== 0 && (
                  <Menu isOpen={isOpen} onClose={onClose}>
                    <MenuList
                      boxShadow="base"
                      border="1px solid rgba(159, 159, 159,0.8)"
                      position="absolute"
                      top="75px"
                      minWidth="655.6px"
                      maxW={["800px", "800px", "100%"]}
                      maxHeight={["300px", "300px", "300px"]}
                      overflowY="auto"
                    >
                      {placeList?.map((place) => {
                        return (
                          <div key={place?.place_id}>
                            <MenuItem
                              width="100%"
                              onClick={() => {
                                setValue(name, place?.display_name);
                                setDistance(
                                  distanceCalc(place?.lat, place?.lon)
                                );
                              }}
                            >
                              {place?.display_name}
                            </MenuItem>
                            {placeList?.length > 1 && <MenuDivider />}
                          </div>
                        );
                      })}
                    </MenuList>
                  </Menu>
                )}
              </div>
            );
          }}
        />
      )}
    </div>
  );
};

export default LocationSearch;
