const request = require('supertest'); 
const app = require('../../src/server'); 

describe('POST /produce/emailcampaigns', () => {
  it('should create a campaign and return success status and message', async () => {
    const mockJsonData = {
      campaignId: '39jds9sbhxxsy3u2h',
    };

    const response = await request(app)
      .post('/produce/emailcampaigns')
      .send(mockJsonData);

    expect(response.status).toBe(201);
    expect(response.body).toBe('Campaign created, emails are scheduled to be sent');
  });
});

describe('POST /produce/smscampaigns', () => {
  it('should create an SMS campaign and return success status and message', async () => {

    const mockJsonData = {
      campaignId: 'sms-campaign-123',
    };

    const response = await request(app)
      .post('/produce/smscampaigns')
      .send(mockJsonData);

    expect(response.status).toBe(201);
    expect(response.body).toBe('SMS campaign created successfully');
  });
});


describe('POST /produce/whatsappcampaigns', () => {
  it('should create a WhatsApp campaign and return success status and message', async () => {
    const mockJsonData = {
      campaignId: 'whatsapp-campaign-456',
    };

    const response = await request(app)
      .post('/produce/whatsappcampaigns')
      .send(mockJsonData);

    expect(response.status).toBe(201);
    expect(response.body).toBe('WhatsApp campaign created successfully');
  });
});
