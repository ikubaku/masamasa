jest.mock("../engine");
// tslint:disable-next-line:ordered-imports
import { Pos2, Vel2, Accel2 } from "../physics2d";

test("Pos2: Instantiate", () => {
    const p = new Pos2(23, 56);
    expect(p.x).toBeCloseTo(23);
    expect(p.y).toBeCloseTo(56);
});
