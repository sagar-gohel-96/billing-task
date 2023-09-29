import { invoiceData } from '@/src/data/invoiceData';
import { InvoiceSchemaEntity } from '@/src/model/invoiceModel';
import type { NextApiRequest, NextApiResponse } from 'next';

type Response = {
  data: InvoiceSchemaEntity[] | [];
  message: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Response>) {
  const id = Number(req.query.id);
  try {
    if (id) {
      const invoice = invoiceData.filter((invoice) => invoice.userId === id);
      res.status(200).json({
        data: invoice,
        message: 'invoiced fetched succesfully'
      });
    }
  } catch (error) {
    res.status(200).json({
      data: [],
      message: 'invoiced fetched succesfully'
    });
  }
}
