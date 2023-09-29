import { InvoiceSchemaEntity } from "../model/invoiceModel";

export const invoiceData = <InvoiceSchemaEntity[]>[
  {
    userId: 1,
    invoiceDate: new Date(),
    billNo: "INV12345",
    receiptNo: "RCT67890",
    services: [
      {
        name: "Service 1",
        price: 100,
        quantity: 2,
      },
      {
        name: "Service 2",
        price: 75,
        quantity: 3,
      },
    ],
    tax: 200,
    disCount: 50,
  },
  {
    userId: 2,
    invoiceDate: new Date(),
    billNo: "INV54321",
    receiptNo: "RCT09876",
    services: [
      {
        name: "Service 3",
        price: 50,
        quantity: 1,
      },
      {
        name: "Service 4",
        price: 120,
        quantity: 2,
      },
    ],
    tax: 200,
    disCount: 50,
  },
  {
    userId: 3,
    invoiceDate: new Date(),
    billNo: "INV67890",
    receiptNo: "RCT54321",
    services: [
      {
        name: "Service 5",
        price: 80,
        quantity: 2,
      },
      {
        name: "Service 6",
        price: 60,
        quantity: 3,
      },
    ],
    tax: 200,
    disCount: 50,
  },
  {
    userId: 4,
    invoiceDate: new Date(),
    billNo: "INV98765",
    receiptNo: "RCT12345",
    services: [
      {
        name: "Service 7",
        price: 90,
        quantity: 1,
      },
      {
        name: "Service 8",
        price: 110,
        quantity: 2,
      },
    ],
    tax: 200,
    disCount: 50,
  },
];
