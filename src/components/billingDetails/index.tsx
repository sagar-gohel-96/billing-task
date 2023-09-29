import { Box, Divider, Typography } from "@mui/material";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { BasicButton } from "..";
import { User } from "@/src/data/userData";
import axios from "axios";
import { InvoiceSchemaEntity, Service } from "@/src/model/invoiceModel";

interface BillingDetailsProps {
  user: User | undefined;
}

const BillingDetails: React.FC<BillingDetailsProps> = (props) => {
  const { user } = props;
  const [invoice, setInvoice] = useState<InvoiceSchemaEntity>();
  const [total, setTotal] = useState<number>();

  const totalAmount = useCallback((quantity: number, price: number) => {
    return quantity * price;
  }, []);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(`/api/invoice/${user?.id ?? 1}`);
      const invoice = response.data;
      setInvoice(invoice?.data[0]);
    } catch (error) {
      console.error("Error", error);
    }
  }, [user?.id]);

  const billDeatail = useMemo(
    () => [
      { label: "Patient Name", value: user?.name },
      { label: "Age/Gender", value: user?.age },
      { label: "Bill No ", value: user?.billNo },
      { label: "Date/ Time", value: invoice?.invoiceDate },
      { label: "Receipt No", value: invoice?.receiptNo },
    ],
    [
      user?.billNo,
      invoice?.invoiceDate,
      invoice?.receiptNo,
      user?.age,
      user?.name,
    ]
  );

  const totalServiceAmount = invoice?.services.reduce(
    (accumulator, service) => {
      const serviceTotal = service.price * service.quantity;
      return accumulator + serviceTotal;
    },
    0
  );

  const totalPrice = useCallback(
    (totalServiceAmount: number, tax: number, discount: number) => {
      return totalServiceAmount + tax - discount;
    },
    []
  );

  useEffect(() => {
    fetchData();
    const total = totalPrice(
      totalServiceAmount ?? 0,
      invoice?.tax ?? 0,
      invoice?.disCount ?? 0
    );
    setTotal(total);
  }, [
    fetchData,
    user?.billNo,
    invoice?.disCount,
    invoice?.tax,
    totalPrice,
    totalServiceAmount,
  ]);
  const rows = ["Sr.no", "Service Name", "Price", "Quantity", "Amount"];

  const bottomDetails = [
    {
      label: "Mobile No",
      value: user?.mobileNo,
    },
    {
      label: "Tax",
      value: invoice?.tax,
    },
    {
      label: "Discount",
      value: invoice?.disCount,
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: "24px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          margin: "20px",
          backgroundColor: "#fff",
          border: "1px solid #312E81",
          borderRadius: "24px",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "90px",
            marginX: "30px",
          }}
        >
          <Typography fontSize={22} fontWeight={700}>
            Billing Details
          </Typography>
          <BasicButton text="Print Bill" />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            backgroundColor: "#F3F3F3",
            height: "89px",
          }}
        >
          {billDeatail &&
            billDeatail?.map((ele: any, i) => (
              <Box key={i} sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    opacity: 0.4,
                  }}
                >
                  {ele.label}
                </Typography>
                <Typography>{ele.value}</Typography>
              </Box>
            ))}
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            {rows.map((row: string, index: number) => {
              return (
                <Typography key={index} fontWeight={900}>
                  {row}
                </Typography>
              );
            })}
          </Box>
          <Divider />
          {invoice &&
            invoice?.services.map((service: Service, i: number) => (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  marginTop: "15px",
                  marginBottom: "10px",
                }}
                key={i}
              >
                <Typography>{i}</Typography>
                <Typography>{service.name}</Typography>
                <Typography>{service.price}</Typography>
                <Typography>{service.quantity}</Typography>
                <Typography>
                  {service && totalAmount(service?.quantity, service?.price)}
                </Typography>
              </Box>
            ))}
        </Box>
        <Box sx={{ backgroundColor: "#F3F3F3" }}>
          {bottomDetails &&
            bottomDetails.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginX: "80px",
                  marginY: "12px",
                }}
              >
                <Typography>{item.label}</Typography>
                <Typography>{item.value}</Typography>
              </Box>
            ))}
          <Divider />
          <Box
            sx={{
              display: "flex",
              marginX: "80px",
              justifyContent: "space-between",
              marginY: "12px",
            }}
          >
            <Typography fontWeight={900}>Total</Typography>
            <Typography>{total}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BillingDetails;
