const zonesData = require('./zonesData');

describe('zonesData statistics', () => {
  test('total number of zones', () => {
    expect(zonesData.length).toBe(41);
  });

  test('count per zone type', () => {
    const counts = zonesData.reduce((acc, z) => {
      acc[z.type] = (acc[z.type] || 0) + 1;
      return acc;
    }, {});
    expect(counts).toEqual({ PFZ: 8, SEZ: 4, Investment: 13, Private: 16 });
  });
});
