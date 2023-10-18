const mongoose = require('mongoose')
const Listing = require('../../models/listing.js')

require('../mongodb_helper')

describe('Listing Model', () => {
    beforeEach((done) => {
        mongoose.connection.collections.listings.drop(() => {
          done();
        });
      });

    it('We would like to create a instance of a listing', () => {
        const listing = new Listing({ 
            userName: 'Joe Bloggs',
            userEmail: 'someEmail@test.com',
            userPlant: 'testPlant', 
            requestedPlants: ['anotherPlan'],
            userLocation: 'somewhere',
        });
        expect(listing.userName).toEqual('Joe Bloggs');
        expect(listing.userEmail).toEqual('someEmail@test.com');
        expect(listing.userPlant).toEqual('testPlant');
        expect(listing.requestedPlants).toEqual(['anotherPlan']);
        expect(listing.userLocation).toEqual('somewhere');
        expect(listing.isAvailable).toEqual(true);
    });

    it('can list all listings', async () => {
      const response = await Listing.find().exec();
      expect(response).toEqual([]);
    });

    it('can add a listing', async () => {
      const listing = new Listing({
        userName: 'Joe Bloggs',
        userEmail: 'someEmail@test.com',
        userPlant: 'testPlant', 
        requestedPlants: ['anotherPlan'],
        userLocation: 'somewhere',
      });
      await listing.save();
      response = await Listing.find().exec();
      expect(response[0]).toMatchObject({
        userName: 'Joe Bloggs',
        userEmail: 'someEmail@test.com',
        userPlant: 'testPlant', 
        requestedPlants: ['anotherPlan'],
        userLocation: 'somewhere',
        isAvailable: true
      });
    });
});
