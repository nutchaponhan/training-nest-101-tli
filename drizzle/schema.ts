import {
  pgTable,
  varchar,
  text,
  integer,
  bigint,
  numeric,
  timestamp,
  boolean,
  index,
  foreignKey,
  primaryKey,
  pgSequence,
} from 'drizzle-orm/pg-core';

export const applicationCounterOfferIdSeq = pgSequence(
  'application_counter_offer_id_seq',
  {
    startWith: '1',
    increment: '1',
    minValue: '1',
    maxValue: '2147483647',
    cache: '1',
    cycle: false,
  },
);
export const applicationGuardianIdSeq = pgSequence(
  'application_guardian_id_seq',
  {
    startWith: '1',
    increment: '1',
    minValue: '1',
    maxValue: '2147483647',
    cache: '1',
    cycle: false,
  },
);
export const applicationIdSeq = pgSequence('application_id_seq', {
  startWith: '1',
  increment: '1',
  minValue: '1',
  maxValue: '2147483647',
  cache: '1',
  cycle: false,
});
export const applicationOcrTransactionIdSeq = pgSequence(
  'application_ocr_transaction_id_seq',
  {
    startWith: '1',
    increment: '1',
    minValue: '1',
    maxValue: '2147483647',
    cache: '1',
    cycle: false,
  },
);
export const applicationOfferDocumentIdSeq = pgSequence(
  'application_offer_document_id_seq',
  {
    startWith: '1',
    increment: '1',
    minValue: '1',
    maxValue: '2147483647',
    cache: '1',
    cycle: false,
  },
);
export const applicationOfferInformationIdSeq = pgSequence(
  'application_offer_information_id_seq',
  {
    startWith: '1',
    increment: '1',
    minValue: '1',
    maxValue: '2147483647',
    cache: '1',
    cycle: false,
  },
);
export const applicationOfferPaymentIdSeq = pgSequence(
  'application_offer_payment_id_seq',
  {
    startWith: '1',
    increment: '1',
    minValue: '1',
    maxValue: '2147483647',
    cache: '1',
    cycle: false,
  },
);
export const applicationOfferQuotationIdSeq = pgSequence(
  'application_offer_quotation_id_seq',
  {
    startWith: '1',
    increment: '1',
    minValue: '1',
    maxValue: '2147483647',
    cache: '1',
    cycle: false,
  },
);
export const applicationOfferTrackingIdSeq = pgSequence(
  'application_offer_tracking_id_seq',
  {
    startWith: '1',
    increment: '1',
    minValue: '1',
    maxValue: '2147483647',
    cache: '1',
    cycle: false,
  },
);
export const applicationRefundIdSeq = pgSequence('application_refund_id_seq', {
  startWith: '1',
  increment: '1',
  minValue: '1',
  maxValue: '2147483647',
  cache: '1',
  cycle: false,
});
export const applicationRefundTransactionIdSeq = pgSequence(
  'application_refund_transaction_id_seq',
  {
    startWith: '1',
    increment: '1',
    minValue: '1',
    maxValue: '2147483647',
    cache: '1',
    cycle: false,
  },
);
export const documentTypeIdSeq = pgSequence('document_type_id_seq', {
  startWith: '1',
  increment: '1',
  minValue: '1',
  maxValue: '2147483647',
  cache: '1',
  cycle: false,
});
export const healthAgeRangeIdSeq = pgSequence('health_age_range_id_seq', {
  startWith: '1',
  increment: '1',
  minValue: '1',
  maxValue: '2147483647',
  cache: '1',
  cycle: false,
});
export const healthConditionIdSeq = pgSequence('health_condition_id_seq', {
  startWith: '1',
  increment: '1',
  minValue: '1',
  maxValue: '2147483647',
  cache: '1',
  cycle: false,
});
export const healthConfigIdSeq = pgSequence('health_config_id_seq', {
  startWith: '1',
  increment: '1',
  minValue: '1',
  maxValue: '2147483647',
  cache: '1',
  cycle: false,
});
export const healthSumAssuredRangeIdSeq = pgSequence(
  'health_sum_assured_range_id_seq',
  {
    startWith: '1',
    increment: '1',
    minValue: '1',
    maxValue: '2147483647',
    cache: '1',
    cycle: false,
  },
);
export const lifePlanningIdSeq = pgSequence('life_planning_id_seq', {
  startWith: '1',
  increment: '1',
  minValue: '1',
  maxValue: '2147483647',
  cache: '1',
  cycle: false,
});
export const lifePlanningProspectIdSeq = pgSequence(
  'life_planning_prospect_id_seq',
  {
    startWith: '1',
    increment: '1',
    minValue: '1',
    maxValue: '2147483647',
    cache: '1',
    cycle: false,
  },
);
export const productIllustrationConfigIdSeq = pgSequence(
  'product_illustration_config_id_seq',
  {
    startWith: '1',
    increment: '1',
    minValue: '1',
    maxValue: '2147483647',
    cache: '1',
    cycle: false,
  },
);
export const productIllustrationLayoutIdSeq = pgSequence(
  'product_illustration_layout_id_seq',
  {
    startWith: '1',
    increment: '1',
    minValue: '1',
    maxValue: '2147483647',
    cache: '1',
    cycle: false,
  },
);
export const productIllustrationRiderIdSeq = pgSequence(
  'product_illustration_rider_id_seq',
  {
    startWith: '1',
    increment: '1',
    minValue: '1',
    maxValue: '2147483647',
    cache: '1',
    cycle: false,
  },
);
export const productIllustrationSignIdSeq = pgSequence(
  'product_illustration_sign_id_seq',
  {
    startWith: '1',
    increment: '1',
    minValue: '1',
    maxValue: '2147483647',
    cache: '1',
    cycle: false,
  },
);
export const productIllustrationTypeConfigIdSeq = pgSequence(
  'product_illustration_type_config_id_seq',
  {
    startWith: '1',
    increment: '1',
    minValue: '1',
    maxValue: '2147483647',
    cache: '1',
    cycle: false,
  },
);
export const productOlCouponIdSeq = pgSequence('product_ol_coupon_id_seq', {
  startWith: '1',
  increment: '1',
  minValue: '1',
  maxValue: '2147483647',
  cache: '1',
  cycle: false,
});
export const productOlCoupontableIdSeq = pgSequence(
  'product_ol_coupontable_id_seq',
  {
    startWith: '1',
    increment: '1',
    minValue: '1',
    maxValue: '2147483647',
    cache: '1',
    cycle: false,
  },
);
export const productOlExtendedIdSeq = pgSequence('product_ol_extended_id_seq', {
  startWith: '1',
  increment: '1',
  minValue: '1',
  maxValue: '2147483647',
  cache: '1',
  cycle: false,
});
export const productOlMaturetableIdSeq = pgSequence(
  'product_ol_maturetable_id_seq',
  {
    startWith: '1',
    increment: '1',
    minValue: '1',
    maxValue: '2147483647',
    cache: '1',
    cycle: false,
  },
);
export const productOlParcouponRateIdSeq = pgSequence(
  'product_ol_parcoupon_rate_id_seq',
  {
    startWith: '1',
    increment: '1',
    minValue: '1',
    maxValue: '2147483647',
    cache: '1',
    cycle: false,
  },
);
export const productPaPremiumRateIdSeq = pgSequence(
  'product_pa_premium_rate_id_seq',
  {
    startWith: '1',
    increment: '1',
    minValue: '1',
    maxValue: '2147483647',
    cache: '1',
    cycle: false,
  },
);
export const productPaTaxRateIdSeq = pgSequence('product_pa_tax_rate_id_seq', {
  startWith: '1',
  increment: '1',
  minValue: '1',
  maxValue: '2147483647',
  cache: '1',
  cycle: false,
});
export const productPackageIdSeq = pgSequence('product_package_id_seq', {
  startWith: '1',
  increment: '1',
  minValue: '1',
  maxValue: '2147483647',
  cache: '1',
  cycle: false,
});
export const productTaxConditionIdSeq = pgSequence(
  'product_tax_condition_id_seq',
  {
    startWith: '1',
    increment: '1',
    minValue: '1',
    maxValue: '2147483647',
    cache: '1',
    cycle: false,
  },
);
export const quotationGuardianIdSeq = pgSequence('quotation_guardian_id_seq', {
  startWith: '1',
  increment: '1',
  minValue: '1',
  maxValue: '2147483647',
  cache: '1',
  cycle: false,
});
export const quotationRefNoSeq = pgSequence('quotation_ref_no_seq', {
  startWith: '1',
  increment: '1',
  minValue: '1',
  maxValue: '9223372036854775807',
  cache: '1',
  cycle: false,
});
export const releaseBuildIdSeq = pgSequence('release_build_id_seq', {
  startWith: '1',
  increment: '1',
  minValue: '1',
  maxValue: '2147483647',
  cache: '1',
  cycle: false,
});
export const releaseBuildMetadataProductIdSeq = pgSequence(
  'release_build_metadata_product_id_seq',
  {
    startWith: '1',
    increment: '1',
    minValue: '1',
    maxValue: '2147483647',
    cache: '1',
    cycle: false,
  },
);
export const releaseBuildMetadataScriptIdSeq = pgSequence(
  'release_build_metadata_script_id_seq',
  {
    startWith: '1',
    increment: '1',
    minValue: '1',
    maxValue: '2147483647',
    cache: '1',
    cycle: false,
  },
);
export const releaseConfigIdSeq = pgSequence('release_config_id_seq', {
  startWith: '1',
  increment: '1',
  minValue: '1',
  maxValue: '2147483647',
  cache: '1',
  cycle: false,
});
export const riderPlanRateConfigIdSeq = pgSequence(
  'rider_plan_rate_config_id_seq',
  {
    startWith: '1',
    increment: '1',
    minValue: '1',
    maxValue: '2147483647',
    cache: '1',
    cycle: false,
  },
);
export const riderTaxRateConfigIdSeq = pgSequence(
  'rider_tax_rate_config_id_seq',
  {
    startWith: '1',
    increment: '1',
    minValue: '1',
    maxValue: '2147483647',
    cache: '1',
    cycle: false,
  },
);

export const productConfig = pgTable('product_config', {
  planCode: varchar('plan_code', { length: 10 }).primaryKey().notNull(),
  type: varchar({ length: 2 }).notNull(),
  planType: varchar('plan_type', { length: 10 }).notNull(),
  name: varchar({ length: 255 }).notNull(),
  displayName: varchar('display_name', { length: 255 }).notNull(),
  conditionDescription: text('condition_description'),
  benefitDescription: text('benefit_description'),
  gender: varchar({ length: 10 }).notNull(),
  paymentType: varchar('payment_type', { length: 5 }).notNull(),
  paymentPeriod: integer('payment_period').notNull(),
  coverageType: varchar('coverage_type', { length: 5 }).notNull(),
  coveragePeriod: integer('coverage_period').notNull(),
  accidentFlag: varchar('accident_flag', { length: 1 }).notNull(),
  disableFlag: varchar('disable_flag', { length: 1 }).notNull(),
  discountFlag: varchar('discount_flag', { length: 1 }).notNull(),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  matureAmount: bigint('mature_amount', { mode: 'number' }).notNull(),
  minAge: integer('min_age').notNull(),
  maxAge: integer('max_age').notNull(),
  pensionAge: integer('pension_age').notNull(),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  minSumAssure: bigint('min_sum_assure', { mode: 'number' }).notNull(),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  maxSumAssure: bigint('max_sum_assure', { mode: 'number' }).notNull(),
  stepSumAssureCode: varchar('step_sum_assure_code', { length: 2 }),
  lifePremium: numeric('life_premium', { precision: 12, scale: 2 }).notNull(),
  accidentPremium: numeric('accident_premium', {
    precision: 12,
    scale: 2,
  }).notNull(),
  dividendFlag: varchar('dividend_flag', { length: 1 }).notNull(),
  surrenderFlag: varchar('surrender_flag', { length: 1 }).notNull(),
  aplFlag: varchar('apl_flag', { length: 1 }).notNull(),
  minPremium: numeric('min_premium', { precision: 12, scale: 2 }).notNull(),
  maxPremium: numeric('max_premium', { precision: 12, scale: 2 }).notNull(),
  interestRate: numeric('interest_rate', { precision: 5, scale: 2 }).notNull(),
  matureInterestRate: numeric('mature_interest_rate', {
    precision: 5,
    scale: 2,
  }),
  loanInterestRate: numeric('loan_interest_rate', { precision: 5, scale: 2 }),
  devoid: varchar({ length: 1 }),
  policyType: varchar('policy_type', { length: 2 }),
  coverageAmount: numeric('coverage_amount', { precision: 12, scale: 2 })
    .default('0')
    .notNull(),
  issueStartDate: timestamp('issue_start_date', {
    withTimezone: true,
    mode: 'string',
  }).notNull(),
  issueEndDate: timestamp('issue_end_date', {
    withTimezone: true,
    mode: 'string',
  }),
  calculateConfigType: integer('calculate_config_type'),
  paymentModeCode: varchar('payment_mode_code', { length: 5 }).notNull(),
  taxDeductionType: varchar('tax_deduction_type', { length: 2 }).notNull(),
  maxTaxDeduction: numeric('max_tax_deduction', { precision: 12, scale: 2 }),
  packageFlag: varchar('package_flag', { length: 1 }).notNull(),
  embeddedRiders: varchar('embedded_riders', { length: 10 }).array(),
  uwMethod: varchar('uw_method', { length: 10 }),
  approveBy: integer('approve_by'),
  status: varchar({ length: 10 }).notNull(),
  createTime: timestamp('create_time', {
    withTimezone: true,
    mode: 'string',
  }).notNull(),
  createUserCode: varchar('create_user_code', { length: 100 }).notNull(),
  lastUpdate: timestamp('last_update', { withTimezone: true, mode: 'string' }),
  updateUserCode: varchar('update_user_code', { length: 100 }),
  minAgeUnit: varchar('min_age_unit', { length: 1 }).notNull(),
  maxAgeUnit: varchar('max_age_unit', { length: 1 }).notNull(),
  isNewCore: boolean('is_new_core').default(false),
  lifePlanning: boolean('life_planning').default(false),
});

export const productRider = pgTable(
  'product_rider',
  {
    planCode: varchar('plan_code', { length: 10 }).notNull(),
    riderCode: varchar('rider_code', { length: 10 }).notNull(),
    status: varchar({ length: 10 }).notNull(),
    createTime: timestamp('create_time', {
      withTimezone: true,
      mode: 'string',
    }).notNull(),
    createUserCode: varchar('create_user_code', { length: 100 }).notNull(),
    lastUpdate: timestamp('last_update', {
      withTimezone: true,
      mode: 'string',
    }),
    updateUserCode: varchar('update_user_code', { length: 100 }),
    criteria: varchar({ length: 50 }).array(),
  },
  (table) => [
    index('product_rider_plan_code_idx').using(
      'btree',
      table.planCode.asc().nullsLast().op('text_ops'),
    ),
    foreignKey({
      columns: [table.planCode],
      foreignColumns: [productConfig.planCode],
      name: 'product_rider_plan_code_fkey',
    }),
    primaryKey({
      columns: [table.planCode, table.riderCode],
      name: 'product_rider_pkey',
    }),
  ],
);
