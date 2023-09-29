import { invoiceData } from '@/src/data/invoiceData';
import { InvoiceSchemaEntity } from '@/src/model/invoiceModel';
import type { NextApiRequest, NextApiResponse } from 'next';

type Response = {
  data: InvoiceSchemaEntity[] | {};
  message: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Response>) {
  try {
    if (invoiceData) {
      res.status(200).json({ data: invoiceData, message: 'invoiced fetched succesfully' });
    }
  } catch (error) {
    res.status(200).json({ data: {}, message: 'invoices not found' });
  }
}
