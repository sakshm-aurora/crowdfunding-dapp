import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x93E37D9Bed21EF17AE975DA0e865146A77641A3f'
);

export default instance;
