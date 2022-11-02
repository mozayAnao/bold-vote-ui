import { useCallback, useState } from "react";
import axios from "axios";
import { useTokens } from "../context/TokensContext";

const useRequestResource = ({ endpoint, tokens = null, label = "" }) => {
  const [resourceList, setResourceList] = useState({
    results: [],
  });

  const [resource, setResource] = useState(null);
  const [resourceCounts, setResourceCounts] = useState(null);

  const { setTokens } = useTokens();

  const getTokens = useCallback(
    (values) => {
      axios
        .post(`api/${endpoint}/`, values)
        .then((res) => {
          setTokens(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    [endpoint, setTokens]
  );

  const addUser = useCallback((values, desgination, callback) => {
    console.log(desgination);
    axios
      .post(`api/${desgination.value}/`, values)
      .then((res) => {
        callback();
      })
      .catch((error) => console.log(error));
  }, []);

  const getResourceCounts = useCallback(() => {
    axios
      .get(`/api/${endpoint}/`)
      .then((res) => {
        const { data } = res;
        setResourceCounts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [endpoint]);

  const getResourceList = useCallback(() => {
    axios
      .get(`/api/${endpoint}/`)
      .then((res) => {
        setResourceList({
          results: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [endpoint]);

  return {
    resourceList,
    getResourceList,
    resource,
    getResourceCounts,
    resourceCounts,
    getTokens,
    addUser,
  };
};

export default useRequestResource;
