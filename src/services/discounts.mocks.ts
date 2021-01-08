export function mockResponse() {
  return {
    fixDiscounts: [
      {
        id: "id1",
        validFrom: new Date(),
        validTo: new Date(),
        percentage: 0
      },
      {
        id: "id2",
        validFrom: new Date(),
        validTo: new Date(),
        percentage: 2
      },
      {
        id: "id3",
        validFrom: new Date(),
        validTo: new Date(),
        percentage: 3
      }
    ]
  };
}
