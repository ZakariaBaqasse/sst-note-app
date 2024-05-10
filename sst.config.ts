import { SSTConfig } from "sst";
import { API } from "./stacks/MyStack";

export default {
  config(_input) {
    return {
      name: "notes",
      region: "eu-north-1",
      profile: "personal",
    };
  },
  stacks(app) {
    app.stack(API);
  },
} satisfies SSTConfig;
