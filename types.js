import z from "zod";

export const authSchema = z.object({
  username: z.string.min(4).max(20),
  password: z.string.min(8).max(20),
});

export const marketSchema = z.object({
  name: z.string.min(4).max(20),
  initialWager: z.number.min(1),
  bet: z.enum(["YES", "NO"]),
  expiry: z.date,
});

export const betSchema = z.object({
  amount: z.number.min(1),
});

export const resolve = z.object({
  resolve: z.enum(["Unresolved", "Won", "Lost"]),
  marketId: z.string.min(1),
});
