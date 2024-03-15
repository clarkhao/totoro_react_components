"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../button/cvaButton";
import { getSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export function Pricing() {
  const router = useRouter();
  const handleSubscription = async (i: number) => {
    console.log(i);
    const session = await getSession();
    if (session === null) {
      router.push("/auth");
    } else {
      window
        .fetch("https://api.lemonsqueezy.com/v1/checkouts", {
          method: "POST",
          cache: "no-cache",
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_LEMONSQUEEZY_API_KEY}`,
          },
          body: JSON.stringify({
            data: {
              type: "checkouts",
              relationships: {
                store: {
                  data: {
                    type: "stores",
                    id: process.env.NEXT_PUBLIC_LEMON_SQUEEZY_STORE_ID?.toString(),
                  },
                },
                variant: {
                  data: {
                    type: "variants",
                    id: process.env.NEXT_PUBLIC_LEMONS_SQUEEZY_PRODUCT_ID?.toString(),
                  },
                },
              },
            },
          }),
        })
        .then(async (res) => {
          if (res.ok) {
            console.log(await res.json());
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <>
      <div className="bg-light-background dark:bg-dark-background min-h-screen py-12 flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-light-background dark:bg-dark-surface rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 min-w-[320px]">
            <div className="p-1 bg-light-secondary-lighter-variant"></div>
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 dark:text-dark-on-surface">
                Basic Plan
              </h2>
              <p className="text-gray-600 mb-6 dark:text-gray-300">per month</p>
              <p className="text-4xl font-bold text-gray-800 mb-6 dark:text-dark-on-surface">
                $6.99
              </p>
              <ul className="text-sm text-gray-600 mb-6 dark:text-gray-300">
                <li className="mb-2 flex items-center">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="w-4 h-4 mr-2 text-green-500"
                  />
                  Limited
                </li>
                <li className="mb-2 flex items-center">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="w-4 h-4 mr-2 text-green-500"
                  />
                  Basic Features
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="w-4 h-4 mr-2 text-green-500"
                  />
                  24/7 Support
                </li>
              </ul>
            </div>
            <div className="p-4">
              <Button
                intent={"secondary"}
                fill={"contained"}
                disabled={false}
                size={"base"}
                state={"pre"}
                className="w-full"
                onClick={(e) => {
                  e.preventDefault();
                  handleSubscription(0);
                }}
              >
                Select Plan
              </Button>
            </div>
          </div>

          <div className="bg-light-background dark:bg-dark-surface rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 min-w-[320px]">
            <div className="p-1 bg-light-primary-lighter-variant"></div>
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 dark:text-dark-on-surface">
                Pro Plan
              </h2>
              <p className="text-gray-600 mb-6 dark:text-gray-300">per month</p>
              <p className="text-4xl font-bold text-gray-800 mb-6 dark:text-dark-on-surface">
                $11.99
              </p>
              <ul className="text-sm text-gray-600 mb-6 dark:text-gray-300">
                <li className="mb-2 flex items-center">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="w-4 h-4 mr-2 text-green-500"
                  />
                  Unlimited
                </li>
                <li className="mb-2 flex items-center">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="w-4 h-4 mr-2 text-green-500"
                  />
                  Advanced Features
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="w-4 h-4 mr-2 text-green-500"
                  />
                  24/7 Support
                </li>
              </ul>
            </div>
            <div className="p-4">
              <Button
                intent={"primary"}
                fill={"contained"}
                disabled={false}
                size={"base"}
                state={"pre"}
                className="w-full"
                onClick={(e) => {
                  e.preventDefault();
                  handleSubscription(1);
                }}
              >
                Select Plan
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
