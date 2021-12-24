import { getAnimals } from "./AnimalAPIService";

// mocks
let mockedDbValue: any;
let mockFirebaseDocs: any;
jest.mock("../FirebaseService/FirebaseService", () => ({
  __esModule: true,
  default: {
    getFirebaseInstance: () => {
      return {
        getFirestore: () => {
          return mockedDbValue;
        },
      };
    },
  },
}));

jest.mock("firebase/firestore/lite", () => ({
  collection: () => {},
  query: () => {},
  getDocs: () => {
    return { docs: mockFirebaseDocs };
  },
}));

describe("AnimalAPIService", () => {
  describe("getAnimals", () => {
    it("when cannot connect", () => {
      expect(getAnimals()).rejects.toEqual("failed to get animals");
    });

    it("when returns no data", () => {
      mockedDbValue = {};
      mockFirebaseDocs = [];
      expect(getAnimals()).resolves.toEqual([]);
    });

    it("when returns data", () => {
      mockedDbValue = {};
      mockFirebaseDocs = [
        { name: "Jake", age: "8", gender: "Male", species: "Cat" },
      ];
      expect(getAnimals()).resolves.toEqual(mockFirebaseDocs);
    });

    it("when returns extra data", () => {
      mockedDbValue = {};
      mockFirebaseDocs = [
        { name: "Jake", age: "8", foo: "biz", gender: "Male", species: "Cat" },
      ];
      expect(getAnimals()).resolves.toEqual([
        { name: "Jake", age: "8", gender: "Male", species: "Cat" },
      ]);
    });

    it("when returns missing data", () => {
      mockedDbValue = {};
      mockFirebaseDocs = [
        {
          gender: "Male",
          species: "Cat",
        },
      ];
      expect(getAnimals()).resolves.toEqual([
        { name: undefined, age: undefined, gender: "Male", species: "Cat" },
      ]);
    });
  });
});
