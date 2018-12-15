import { Vector2 } from "../vector2";

test("Vector2: Instantiate", () => {
    const v = new Vector2(12, 34);
    expect(v.x).toBeCloseTo(12);
    expect(v.y).toBeCloseTo(34);
});

test("Vector2: Addition", () => {
    const v1 = new Vector2(1.2, 6.5);
    const v2 = new Vector2(-5.1, 19.12);
    const res = v1.add(v2);
    expect(res.x).toBeCloseTo(-3.9);
    expect(res.y).toBeCloseTo(25.62);
});

test("Vector2: Subtraction", () => {
    const v1 = new Vector2(67.2, -3);
    const v2 = new Vector2(35.6, 128);
    const res = v1.subtract(v2);
    expect(res.x).toBeCloseTo(31.6);
    expect(res.y).toBeCloseTo(-131);
});

test("Vector2: Dot", () => {
    let v1 = new Vector2(1, 1);
    let v2 = new Vector2(1, -1);
    let res = v1.dot(v2);
    expect(res).toBeCloseTo(0);

    v1 = new Vector2(2.4, -12);
    v2 = new Vector2(-1, 23);
    res = v1.dot(v2);
    expect(res).toBeCloseTo(-278.4);
});

test("Vector2: Scale", () => {
    const v = new Vector2(3.2, -11.4);
    const res = v.scale(2.5);
    expect(res.x).toBeCloseTo(8);
    expect(res.y).toBeCloseTo(-28.5);
});

test("Vector2: Absolute", () => {
    const v = new Vector2(5, 12);
    const res = v.abs();
    expect(res).toBeCloseTo(13);
});
