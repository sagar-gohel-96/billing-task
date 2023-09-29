import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export type Service = {
  name: string;
  price: number;
  quantity: number;
};

export interface InvoiceSchemaEntity {
  userId: mongoose.Types.ObjectId | number;
  invoiceDate: Date;
  billNo: string;
  receiptNo: string;
  services: Service[];
  disCount: number;
  tax: number;
}
const serviceSchema = new Schema<Service>({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
});

const invoiceSchema = new Schema<InvoiceSchemaEntity>({
  userId: {
    type: Schema.ObjectId,
    ref: 'Users'
  },
  billNo: {
    type: String,
    required: true
  },
  receiptNo: {
    type: String,
    required: true
  },
  services: [serviceSchema],
  tax: {
    type: Number
  },
  disCount: {
    type: Number
  }
});

module.exports =
  mongoose.models.Invoices || mongoose.model<InvoiceSchemaEntity>('Invoices', invoiceSchema);
