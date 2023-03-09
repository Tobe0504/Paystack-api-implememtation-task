import React, { useContext, useEffect } from "react";
import Card from "../../Components/Card/Card";
import Layout from "../../Components/Layout/Layout";
import classes from "./InitiateTransfer.module.css";
import Input from "../../Components/Input/Input";
import { AppContext } from "../../Context/AppContext";
import Dropdown from "../../Components/Dropdown/Dropdown";
import { Alert, CircularProgress } from "@mui/material";
import Button from "../../Components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";

const InitiateTransfer = () => {
  // Context
  const {
    accountNumber,
    setAccountNumber,
    availablebanks,
    fetchBanks,
    isFetchingAvailableBanks,
    fetchBanksError,
    selectedBank,
    setSelectedBank,
    description,
    setDescription,
    resolveAccountDetails,
    isResolvingBankDetails,
    resolvedBankDetails,
    verifyAccountDetailsError,
    generateTransferRecepient,
    isSendingReuest,
    amount,
    setAmount,
    initiateTransfer,
  } = useContext(AppContext);

  //   Utilitues
  const handleAccountNumberChange = (e) => {
    setAccountNumber(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleInitiateTransfer = () => {
    initiateTransfer();
  };

  //   Effects
  useEffect(() => {
    fetchBanks();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (accountNumber && resolvedBankDetails) {
      generateTransferRecepient();
    }
    // eslint-disable-next-line
  }, [accountNumber, resolvedBankDetails]);

  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.innerContainer}>
          <Card>
            <h3 className={classes.header}>Make a Transfer</h3>
            {verifyAccountDetailsError && (
              <div className={classes.errorSection}>
                <Alert severity="error">{verifyAccountDetailsError}</Alert>
              </div>
            )}

            <div className={classes.transferForm}>
              {/* Account number input */}
              <Input
                id="accountNumber"
                value={accountNumber}
                onChange={(e) => {
                  handleAccountNumberChange(e);
                }}
                placeholder=" "
                type="number"
              >
                <label htmlFor="accountNumber" style={{ cursor: "text" }}>
                  Bank Account Number
                </label>
              </Input>

              {/* Banks List Dropdown */}
              <div className={classes.dropdownSection}>
                <Dropdown
                  title={
                    isFetchingAvailableBanks ? "Loading banks" : "Select a bank"
                  }
                  options={availablebanks?.map((bank) => bank?.name)}
                  selected={selectedBank}
                  setSelected={setSelectedBank}
                />
              </div>

              {fetchBanksError && (
                <span className={classes.warning}>{fetchBanksError}</span>
              )}
            </div>

            {/* Bank resolution details */}
            <div className={classes.bankResolutionDetails}>
              {isResolvingBankDetails && !resolvedBankDetails ? (
                <CircularProgress
                  color="inherit"
                  size="0.8rem"
                  style={{ color: "#10a56c" }}
                />
              ) : !isResolvingBankDetails && resolvedBankDetails ? (
                <div className={classes.resolvedBankDetails}>
                  <span>{resolvedBankDetails}</span>

                  <span>
                    {
                      <FontAwesomeIcon
                        icon={faRotateLeft}
                        color="#10a56c"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          resolveAccountDetails();
                        }}
                      />
                    }
                  </span>
                </div>
              ) : (
                !resolvedBankDetails &&
                !isResolvingBankDetails &&
                accountNumber &&
                selectedBank && (
                  <div
                    onClick={() => {
                      resolveAccountDetails();
                    }}
                    className={classes.resolveText}
                    style={
                      !accountNumber && !selectedBank
                        ? { cursor: "not-allowed" }
                        : { cursor: "pointer" }
                    }
                  >
                    Resolve account details
                  </div>
                )
              )}
            </div>

            {/* Description and amount section */}
            {accountNumber && resolvedBankDetails && (
              <div className={classes.anountAndDescription}>
                <Input
                  id="amount"
                  type="number"
                  value={amount}
                  onChange={(e) => {
                    handleAmountChange(e);
                  }}
                  placeholder=" "
                >
                  <label htmlFor="amount" style={{ cursor: "text" }}>
                    Amount in Naira
                  </label>
                </Input>

                <Input
                  id="description"
                  value={description}
                  onChange={(e) => {
                    handleDescriptionChange(e);
                  }}
                  placeholder=" "
                >
                  <label htmlFor="description" style={{ cursor: "text" }}>
                    Description
                  </label>
                </Input>
              </div>
            )}

            {/* Button Section */}
            {accountNumber && resolvedBankDetails && description && (
              <div className={classes.buttonSection}>
                <Button onClick={handleInitiateTransfer}>
                  {isSendingReuest ? (
                    <CircularProgress
                      color="inherit"
                      size="0.8rem"
                      style={{ color: "#ffffff" }}
                    />
                  ) : (
                    "Make Transfer"
                  )}
                </Button>
              </div>
            )}
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default InitiateTransfer;
