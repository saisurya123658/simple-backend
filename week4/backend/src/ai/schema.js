const { z } = require("zod");

const SummarySchema = z.object({
    bullets: z.array(z.string()).length(3)
});

module.exports = SummarySchema;
