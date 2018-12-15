import { Vector3 } from "../vector3";

test("Vector3: Instantiate", () => {
    const v = new Vector3(1.2, -56.32, 0);
    expect(v.x).toBeCloseTo(1.2);
    expect(v.y).toBeCloseTo(-56.32);
    expect(v.z).toBeCloseTo(0);
});
