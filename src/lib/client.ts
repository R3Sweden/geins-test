import { GeinsCore } from "@geins/core";
import type { GeinsSettings } from "@geins/types";

const geinsSettings: GeinsSettings = {
	apiKey: "0D66F683-B8CF-45B4-9233-ACC47D6FCCD0",
	accountName: "Test",
	channel: "1",
	tld: "se",
	locale: "en",
	market: "1",
	environment: "dev", // or 'dev', 'qa'
};

const geinsCore = new GeinsCore(geinsSettings);

export default geinsCore;
