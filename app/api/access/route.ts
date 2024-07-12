import type { NextApiRequest, NextApiResponse } from 'next';
export const accessCodes = `${process.env.WEB_APP_ACCESS_CODES}`;

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { accessCode } = req.body;
  const valid = accessCodes.includes(accessCode);

  if (valid) {
    // Log the usage (optional)
    logUsage(accessCode);

    res.status(200).json({ valid: true });
  } else {
    res.status(401).json({ valid: false });
  }
};

const logUsage = (accessCode: string) => {
  // Implement logging logic here
};
