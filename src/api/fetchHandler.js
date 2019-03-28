import axios from "axios";
const BASE_URL = "http://srrrvrrr1.humbrrrcollective.space:3000";

class FetchHandler {
  static getCharacterProfiles() {
    const targetUrl = BASE_URL + "/characters";
    return this.get(targetUrl, {}).then(profileData => {
      return profileData;
    });
  }

  static getDwarfNames(gender, number) {
    let urlSuffix = "";
    urlSuffix += gender ? gender : "";
    urlSuffix += number ? number : "";
    const targetUrl = BASE_URL + urlSuffix;

    return this.get(targetUrl, {}).then(dorfNames => {
      return dorfNames;
    });
  }

  static getElfNames(gender, number) {
    let urlSuffix = "";
    urlSuffix += gender ? gender : "";
    urlSuffix += number ? number : "";
    const targetUrl = BASE_URL + urlSuffix;

    return this.get(targetUrl, {}).then(elfNames => {
      return elfNames;
    });
  }

  static get(endpoint, parameters) {
    return axios.get(endpoint, { params: parameters });
  }
}

export default FetchHandler;
