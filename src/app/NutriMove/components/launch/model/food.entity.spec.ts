import { Food } from './food.entity';

describe('Food', () => {
  it('should create an instance', () => {
    // @ts-ignore
    expect(new Food()).toBeTruthy();
  });
});
