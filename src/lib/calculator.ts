// src/lib/calculator.ts

export interface TradeInputs {
  symbol?: string;
  buyPrice: number;
  sellPrice: number;
  quantity: number;
  buyFee: number; // percentage, e.g., 0.1 for 0.1%
  sellFee: number; // percentage, e.g., 0.1 for 0.1%
  taxRate: number; // percentage, e.g., 20 for 20%
}

export interface ProfitResult {
  buyValue: number;
  sellValue: number;
  grossProfit: number;
  taxDeduction: number;
  netProfit: number;
  roi: number; // net ROI percentage
  profitPercent: number; // gross profit percentage
  breakEvenSellPrice: number;
}

export function calculateProfit(inputs: TradeInputs): ProfitResult {
  const { buyPrice, sellPrice, quantity, buyFee, sellFee, taxRate } = inputs;

  const buyFeeRate = buyFee / 100;
  const sellFeeRate = sellFee / 100;
  const taxRateDecimal = taxRate / 100;

  const baseBuy = buyPrice * quantity;
  const buyFeeAmount = baseBuy * buyFeeRate;
  const buyValue = baseBuy + buyFeeAmount;

  const baseSell = sellPrice * quantity;
  const sellFeeAmount = baseSell * sellFeeRate;
  const sellValue = baseSell - sellFeeAmount;

  const grossProfit = sellValue - buyValue;
  const taxDeduction = grossProfit > 0 ? grossProfit * taxRateDecimal : 0;
  const netProfit = grossProfit - taxDeduction;

  const roi = buyValue > 0 ? (netProfit / buyValue) * 100 : 0;
  const profitPercent = buyValue > 0 ? (grossProfit / buyValue) * 100 : 0;

  // Break-even sell price (where grossProfit = 0)
  const targetSellValue = buyValue;
  const targetBaseSell = targetSellValue / (1 - sellFeeRate);
  const breakEvenSellPrice = targetBaseSell / quantity;

  return {
    buyValue,
    sellValue,
    grossProfit,
    taxDeduction,
    netProfit,
    roi,
    profitPercent,
    breakEvenSellPrice
  };
}

// For FR4: Scenario planning (example: target sell price for desired net profit)
export function calculateTargetSellPrice(
  inputs: Omit<TradeInputs, 'sellPrice'>,
  desiredNetProfit: number
): number {
  const { buyPrice, quantity, buyFee, sellFee, taxRate } = inputs;

  const buyFeeRate = buyFee / 100;
  const sellFeeRate = sellFee / 100;
  const taxRateDecimal = taxRate / 100;

  const baseBuy = buyPrice * quantity;
  const buyFeeAmount = baseBuy * buyFeeRate;
  const buyValue = baseBuy + buyFeeAmount;

  let grossRequired: number;
  if (desiredNetProfit <= 0) {
    // Simplified: for loss, no tax
    grossRequired = desiredNetProfit;
  } else {
    grossRequired = desiredNetProfit / (1 - taxRateDecimal);
  }

  const targetSellValue = buyValue + grossRequired;
  const targetBaseSell = targetSellValue / (1 - sellFeeRate);
  const targetSellPrice = targetBaseSell / quantity;

  return targetSellPrice;
}