import { assertEquals } from "@std/assert";
import { afterEach,beforeEach, it , describe } from "@std/testing/bdd";
import { temp } from "../src/game.js";

test('temp file runs correctly', () => {
  assertEquals(temp());
});
