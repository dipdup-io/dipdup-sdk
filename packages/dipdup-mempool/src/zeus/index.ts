/* eslint-disable */

import { AllTypesProps, ReturnTypes } from './const';
type ZEUS_INTERFACES = never
type ZEUS_UNIONS = never

export type ValueTypes = {
    /** expression to compare columns of type String. All fields are combined with logical 'AND'. */
["String_comparison_exp"]: {
	_eq?:string,
	_gt?:string,
	_gte?:string,
	_ilike?:string,
	_in?:string[],
	_is_null?:boolean,
	_like?:string,
	_lt?:string,
	_lte?:string,
	_neq?:string,
	_nilike?:string,
	_nin?:string[],
	_nlike?:string,
	_nsimilar?:string,
	_similar?:string
};
	["bigint"]:unknown;
	/** expression to compare columns of type bigint. All fields are combined with logical 'AND'. */
["bigint_comparison_exp"]: {
	_eq?:ValueTypes["bigint"],
	_gt?:ValueTypes["bigint"],
	_gte?:ValueTypes["bigint"],
	_in?:ValueTypes["bigint"][],
	_is_null?:boolean,
	_lt?:ValueTypes["bigint"],
	_lte?:ValueTypes["bigint"],
	_neq?:ValueTypes["bigint"],
	_nin?:ValueTypes["bigint"][]
};
	["jsonb"]:unknown;
	/** expression to compare columns of type jsonb. All fields are combined with logical 'AND'. */
["jsonb_comparison_exp"]: {
	/** is the column contained in the given json value */
	_contained_in?:ValueTypes["jsonb"],
	/** does the column contain the given json value at the top level */
	_contains?:ValueTypes["jsonb"],
	_eq?:ValueTypes["jsonb"],
	_gt?:ValueTypes["jsonb"],
	_gte?:ValueTypes["jsonb"],
	/** does the string exist as a top-level key in the column */
	_has_key?:string,
	/** do all of these strings exist as top-level keys in the column */
	_has_keys_all?:string[],
	/** do any of these strings exist as top-level keys in the column */
	_has_keys_any?:string[],
	_in?:ValueTypes["jsonb"][],
	_is_null?:boolean,
	_lt?:ValueTypes["jsonb"],
	_lte?:ValueTypes["jsonb"],
	_neq?:ValueTypes["jsonb"],
	_nin?:ValueTypes["jsonb"][]
};
	/** columns and relationships of "mempool_activate_account" */
["mempool_activate_account"]: AliasType<{
	branch?:true,
	created_at?:true,
errors?: [{	/** JSON select path */
	path?:string},true],
	expiration_level?:true,
	hash?:true,
	kind?:true,
	level?:true,
	network?:true,
	pkh?:true,
	secret?:true,
	signature?:true,
	status?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** aggregated selection of "mempool_activate_account" */
["mempool_activate_account_aggregate"]: AliasType<{
	aggregate?:ValueTypes["mempool_activate_account_aggregate_fields"],
	nodes?:ValueTypes["mempool_activate_account"],
		__typename?: true
}>;
	/** aggregate fields of "mempool_activate_account" */
["mempool_activate_account_aggregate_fields"]: AliasType<{
	avg?:ValueTypes["mempool_activate_account_avg_fields"],
count?: [{	columns?:ValueTypes["mempool_activate_account_select_column"][],	distinct?:boolean},true],
	max?:ValueTypes["mempool_activate_account_max_fields"],
	min?:ValueTypes["mempool_activate_account_min_fields"],
	stddev?:ValueTypes["mempool_activate_account_stddev_fields"],
	stddev_pop?:ValueTypes["mempool_activate_account_stddev_pop_fields"],
	stddev_samp?:ValueTypes["mempool_activate_account_stddev_samp_fields"],
	sum?:ValueTypes["mempool_activate_account_sum_fields"],
	var_pop?:ValueTypes["mempool_activate_account_var_pop_fields"],
	var_samp?:ValueTypes["mempool_activate_account_var_samp_fields"],
	variance?:ValueTypes["mempool_activate_account_variance_fields"],
		__typename?: true
}>;
	/** order by aggregate values of table "mempool_activate_account" */
["mempool_activate_account_aggregate_order_by"]: {
	avg?:ValueTypes["mempool_activate_account_avg_order_by"],
	count?:ValueTypes["order_by"],
	max?:ValueTypes["mempool_activate_account_max_order_by"],
	min?:ValueTypes["mempool_activate_account_min_order_by"],
	stddev?:ValueTypes["mempool_activate_account_stddev_order_by"],
	stddev_pop?:ValueTypes["mempool_activate_account_stddev_pop_order_by"],
	stddev_samp?:ValueTypes["mempool_activate_account_stddev_samp_order_by"],
	sum?:ValueTypes["mempool_activate_account_sum_order_by"],
	var_pop?:ValueTypes["mempool_activate_account_var_pop_order_by"],
	var_samp?:ValueTypes["mempool_activate_account_var_samp_order_by"],
	variance?:ValueTypes["mempool_activate_account_variance_order_by"]
};
	/** aggregate avg on columns */
["mempool_activate_account_avg_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by avg() on columns of table "mempool_activate_account" */
["mempool_activate_account_avg_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** Boolean expression to filter rows from the table "mempool_activate_account". All fields are combined with a logical 'AND'. */
["mempool_activate_account_bool_exp"]: {
	_and?:(ValueTypes["mempool_activate_account_bool_exp"] | undefined)[],
	_not?:ValueTypes["mempool_activate_account_bool_exp"],
	_or?:(ValueTypes["mempool_activate_account_bool_exp"] | undefined)[],
	branch?:ValueTypes["String_comparison_exp"],
	created_at?:ValueTypes["bigint_comparison_exp"],
	errors?:ValueTypes["jsonb_comparison_exp"],
	expiration_level?:ValueTypes["bigint_comparison_exp"],
	hash?:ValueTypes["String_comparison_exp"],
	kind?:ValueTypes["String_comparison_exp"],
	level?:ValueTypes["bigint_comparison_exp"],
	network?:ValueTypes["String_comparison_exp"],
	pkh?:ValueTypes["String_comparison_exp"],
	secret?:ValueTypes["String_comparison_exp"],
	signature?:ValueTypes["String_comparison_exp"],
	status?:ValueTypes["String_comparison_exp"],
	updated_at?:ValueTypes["bigint_comparison_exp"]
};
	/** aggregate max on columns */
["mempool_activate_account_max_fields"]: AliasType<{
	branch?:true,
	created_at?:true,
	expiration_level?:true,
	hash?:true,
	kind?:true,
	level?:true,
	network?:true,
	pkh?:true,
	secret?:true,
	signature?:true,
	status?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by max() on columns of table "mempool_activate_account" */
["mempool_activate_account_max_order_by"]: {
	branch?:ValueTypes["order_by"],
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	hash?:ValueTypes["order_by"],
	kind?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	network?:ValueTypes["order_by"],
	pkh?:ValueTypes["order_by"],
	secret?:ValueTypes["order_by"],
	signature?:ValueTypes["order_by"],
	status?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate min on columns */
["mempool_activate_account_min_fields"]: AliasType<{
	branch?:true,
	created_at?:true,
	expiration_level?:true,
	hash?:true,
	kind?:true,
	level?:true,
	network?:true,
	pkh?:true,
	secret?:true,
	signature?:true,
	status?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by min() on columns of table "mempool_activate_account" */
["mempool_activate_account_min_order_by"]: {
	branch?:ValueTypes["order_by"],
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	hash?:ValueTypes["order_by"],
	kind?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	network?:ValueTypes["order_by"],
	pkh?:ValueTypes["order_by"],
	secret?:ValueTypes["order_by"],
	signature?:ValueTypes["order_by"],
	status?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** ordering options when selecting data from "mempool_activate_account" */
["mempool_activate_account_order_by"]: {
	branch?:ValueTypes["order_by"],
	created_at?:ValueTypes["order_by"],
	errors?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	hash?:ValueTypes["order_by"],
	kind?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	network?:ValueTypes["order_by"],
	pkh?:ValueTypes["order_by"],
	secret?:ValueTypes["order_by"],
	signature?:ValueTypes["order_by"],
	status?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** primary key columns input for table: "mempool_activate_account" */
["mempool_activate_account_pk_columns_input"]: {
	hash:string,
	network:string
};
	/** select columns of table "mempool_activate_account" */
["mempool_activate_account_select_column"]:mempool_activate_account_select_column;
	/** aggregate stddev on columns */
["mempool_activate_account_stddev_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by stddev() on columns of table "mempool_activate_account" */
["mempool_activate_account_stddev_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate stddev_pop on columns */
["mempool_activate_account_stddev_pop_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by stddev_pop() on columns of table "mempool_activate_account" */
["mempool_activate_account_stddev_pop_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate stddev_samp on columns */
["mempool_activate_account_stddev_samp_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by stddev_samp() on columns of table "mempool_activate_account" */
["mempool_activate_account_stddev_samp_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate sum on columns */
["mempool_activate_account_sum_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by sum() on columns of table "mempool_activate_account" */
["mempool_activate_account_sum_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate var_pop on columns */
["mempool_activate_account_var_pop_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by var_pop() on columns of table "mempool_activate_account" */
["mempool_activate_account_var_pop_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate var_samp on columns */
["mempool_activate_account_var_samp_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by var_samp() on columns of table "mempool_activate_account" */
["mempool_activate_account_var_samp_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate variance on columns */
["mempool_activate_account_variance_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by variance() on columns of table "mempool_activate_account" */
["mempool_activate_account_variance_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** columns and relationships of "mempool_ballot" */
["mempool_ballot"]: AliasType<{
	ballot?:true,
	branch?:true,
	created_at?:true,
errors?: [{	/** JSON select path */
	path?:string},true],
	expiration_level?:true,
	hash?:true,
	kind?:true,
	level?:true,
	network?:true,
	period?:true,
	signature?:true,
	status?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** aggregated selection of "mempool_ballot" */
["mempool_ballot_aggregate"]: AliasType<{
	aggregate?:ValueTypes["mempool_ballot_aggregate_fields"],
	nodes?:ValueTypes["mempool_ballot"],
		__typename?: true
}>;
	/** aggregate fields of "mempool_ballot" */
["mempool_ballot_aggregate_fields"]: AliasType<{
	avg?:ValueTypes["mempool_ballot_avg_fields"],
count?: [{	columns?:ValueTypes["mempool_ballot_select_column"][],	distinct?:boolean},true],
	max?:ValueTypes["mempool_ballot_max_fields"],
	min?:ValueTypes["mempool_ballot_min_fields"],
	stddev?:ValueTypes["mempool_ballot_stddev_fields"],
	stddev_pop?:ValueTypes["mempool_ballot_stddev_pop_fields"],
	stddev_samp?:ValueTypes["mempool_ballot_stddev_samp_fields"],
	sum?:ValueTypes["mempool_ballot_sum_fields"],
	var_pop?:ValueTypes["mempool_ballot_var_pop_fields"],
	var_samp?:ValueTypes["mempool_ballot_var_samp_fields"],
	variance?:ValueTypes["mempool_ballot_variance_fields"],
		__typename?: true
}>;
	/** order by aggregate values of table "mempool_ballot" */
["mempool_ballot_aggregate_order_by"]: {
	avg?:ValueTypes["mempool_ballot_avg_order_by"],
	count?:ValueTypes["order_by"],
	max?:ValueTypes["mempool_ballot_max_order_by"],
	min?:ValueTypes["mempool_ballot_min_order_by"],
	stddev?:ValueTypes["mempool_ballot_stddev_order_by"],
	stddev_pop?:ValueTypes["mempool_ballot_stddev_pop_order_by"],
	stddev_samp?:ValueTypes["mempool_ballot_stddev_samp_order_by"],
	sum?:ValueTypes["mempool_ballot_sum_order_by"],
	var_pop?:ValueTypes["mempool_ballot_var_pop_order_by"],
	var_samp?:ValueTypes["mempool_ballot_var_samp_order_by"],
	variance?:ValueTypes["mempool_ballot_variance_order_by"]
};
	/** aggregate avg on columns */
["mempool_ballot_avg_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	period?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by avg() on columns of table "mempool_ballot" */
["mempool_ballot_avg_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	period?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** Boolean expression to filter rows from the table "mempool_ballot". All fields are combined with a logical 'AND'. */
["mempool_ballot_bool_exp"]: {
	_and?:(ValueTypes["mempool_ballot_bool_exp"] | undefined)[],
	_not?:ValueTypes["mempool_ballot_bool_exp"],
	_or?:(ValueTypes["mempool_ballot_bool_exp"] | undefined)[],
	ballot?:ValueTypes["String_comparison_exp"],
	branch?:ValueTypes["String_comparison_exp"],
	created_at?:ValueTypes["bigint_comparison_exp"],
	errors?:ValueTypes["jsonb_comparison_exp"],
	expiration_level?:ValueTypes["bigint_comparison_exp"],
	hash?:ValueTypes["String_comparison_exp"],
	kind?:ValueTypes["String_comparison_exp"],
	level?:ValueTypes["bigint_comparison_exp"],
	network?:ValueTypes["String_comparison_exp"],
	period?:ValueTypes["bigint_comparison_exp"],
	signature?:ValueTypes["String_comparison_exp"],
	status?:ValueTypes["String_comparison_exp"],
	updated_at?:ValueTypes["bigint_comparison_exp"]
};
	/** aggregate max on columns */
["mempool_ballot_max_fields"]: AliasType<{
	ballot?:true,
	branch?:true,
	created_at?:true,
	expiration_level?:true,
	hash?:true,
	kind?:true,
	level?:true,
	network?:true,
	period?:true,
	signature?:true,
	status?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by max() on columns of table "mempool_ballot" */
["mempool_ballot_max_order_by"]: {
	ballot?:ValueTypes["order_by"],
	branch?:ValueTypes["order_by"],
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	hash?:ValueTypes["order_by"],
	kind?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	network?:ValueTypes["order_by"],
	period?:ValueTypes["order_by"],
	signature?:ValueTypes["order_by"],
	status?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate min on columns */
["mempool_ballot_min_fields"]: AliasType<{
	ballot?:true,
	branch?:true,
	created_at?:true,
	expiration_level?:true,
	hash?:true,
	kind?:true,
	level?:true,
	network?:true,
	period?:true,
	signature?:true,
	status?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by min() on columns of table "mempool_ballot" */
["mempool_ballot_min_order_by"]: {
	ballot?:ValueTypes["order_by"],
	branch?:ValueTypes["order_by"],
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	hash?:ValueTypes["order_by"],
	kind?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	network?:ValueTypes["order_by"],
	period?:ValueTypes["order_by"],
	signature?:ValueTypes["order_by"],
	status?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** ordering options when selecting data from "mempool_ballot" */
["mempool_ballot_order_by"]: {
	ballot?:ValueTypes["order_by"],
	branch?:ValueTypes["order_by"],
	created_at?:ValueTypes["order_by"],
	errors?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	hash?:ValueTypes["order_by"],
	kind?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	network?:ValueTypes["order_by"],
	period?:ValueTypes["order_by"],
	signature?:ValueTypes["order_by"],
	status?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** primary key columns input for table: "mempool_ballot" */
["mempool_ballot_pk_columns_input"]: {
	hash:string,
	network:string
};
	/** select columns of table "mempool_ballot" */
["mempool_ballot_select_column"]:mempool_ballot_select_column;
	/** aggregate stddev on columns */
["mempool_ballot_stddev_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	period?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by stddev() on columns of table "mempool_ballot" */
["mempool_ballot_stddev_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	period?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate stddev_pop on columns */
["mempool_ballot_stddev_pop_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	period?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by stddev_pop() on columns of table "mempool_ballot" */
["mempool_ballot_stddev_pop_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	period?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate stddev_samp on columns */
["mempool_ballot_stddev_samp_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	period?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by stddev_samp() on columns of table "mempool_ballot" */
["mempool_ballot_stddev_samp_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	period?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate sum on columns */
["mempool_ballot_sum_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	period?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by sum() on columns of table "mempool_ballot" */
["mempool_ballot_sum_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	period?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate var_pop on columns */
["mempool_ballot_var_pop_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	period?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by var_pop() on columns of table "mempool_ballot" */
["mempool_ballot_var_pop_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	period?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate var_samp on columns */
["mempool_ballot_var_samp_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	period?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by var_samp() on columns of table "mempool_ballot" */
["mempool_ballot_var_samp_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	period?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate variance on columns */
["mempool_ballot_variance_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	period?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by variance() on columns of table "mempool_ballot" */
["mempool_ballot_variance_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	period?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** columns and relationships of "mempool_delegation" */
["mempool_delegation"]: AliasType<{
	branch?:true,
	counter?:true,
	created_at?:true,
	delegate?:true,
errors?: [{	/** JSON select path */
	path?:string},true],
	expiration_level?:true,
	fee?:true,
	gas_limit?:true,
	hash?:true,
	kind?:true,
	level?:true,
	network?:true,
	signature?:true,
	status?:true,
	storage_limit?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** aggregated selection of "mempool_delegation" */
["mempool_delegation_aggregate"]: AliasType<{
	aggregate?:ValueTypes["mempool_delegation_aggregate_fields"],
	nodes?:ValueTypes["mempool_delegation"],
		__typename?: true
}>;
	/** aggregate fields of "mempool_delegation" */
["mempool_delegation_aggregate_fields"]: AliasType<{
	avg?:ValueTypes["mempool_delegation_avg_fields"],
count?: [{	columns?:ValueTypes["mempool_delegation_select_column"][],	distinct?:boolean},true],
	max?:ValueTypes["mempool_delegation_max_fields"],
	min?:ValueTypes["mempool_delegation_min_fields"],
	stddev?:ValueTypes["mempool_delegation_stddev_fields"],
	stddev_pop?:ValueTypes["mempool_delegation_stddev_pop_fields"],
	stddev_samp?:ValueTypes["mempool_delegation_stddev_samp_fields"],
	sum?:ValueTypes["mempool_delegation_sum_fields"],
	var_pop?:ValueTypes["mempool_delegation_var_pop_fields"],
	var_samp?:ValueTypes["mempool_delegation_var_samp_fields"],
	variance?:ValueTypes["mempool_delegation_variance_fields"],
		__typename?: true
}>;
	/** order by aggregate values of table "mempool_delegation" */
["mempool_delegation_aggregate_order_by"]: {
	avg?:ValueTypes["mempool_delegation_avg_order_by"],
	count?:ValueTypes["order_by"],
	max?:ValueTypes["mempool_delegation_max_order_by"],
	min?:ValueTypes["mempool_delegation_min_order_by"],
	stddev?:ValueTypes["mempool_delegation_stddev_order_by"],
	stddev_pop?:ValueTypes["mempool_delegation_stddev_pop_order_by"],
	stddev_samp?:ValueTypes["mempool_delegation_stddev_samp_order_by"],
	sum?:ValueTypes["mempool_delegation_sum_order_by"],
	var_pop?:ValueTypes["mempool_delegation_var_pop_order_by"],
	var_samp?:ValueTypes["mempool_delegation_var_samp_order_by"],
	variance?:ValueTypes["mempool_delegation_variance_order_by"]
};
	/** aggregate avg on columns */
["mempool_delegation_avg_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by avg() on columns of table "mempool_delegation" */
["mempool_delegation_avg_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** Boolean expression to filter rows from the table "mempool_delegation". All fields are combined with a logical 'AND'. */
["mempool_delegation_bool_exp"]: {
	_and?:(ValueTypes["mempool_delegation_bool_exp"] | undefined)[],
	_not?:ValueTypes["mempool_delegation_bool_exp"],
	_or?:(ValueTypes["mempool_delegation_bool_exp"] | undefined)[],
	branch?:ValueTypes["String_comparison_exp"],
	counter?:ValueTypes["String_comparison_exp"],
	created_at?:ValueTypes["bigint_comparison_exp"],
	delegate?:ValueTypes["String_comparison_exp"],
	errors?:ValueTypes["jsonb_comparison_exp"],
	expiration_level?:ValueTypes["bigint_comparison_exp"],
	fee?:ValueTypes["String_comparison_exp"],
	gas_limit?:ValueTypes["String_comparison_exp"],
	hash?:ValueTypes["String_comparison_exp"],
	kind?:ValueTypes["String_comparison_exp"],
	level?:ValueTypes["bigint_comparison_exp"],
	network?:ValueTypes["String_comparison_exp"],
	signature?:ValueTypes["String_comparison_exp"],
	status?:ValueTypes["String_comparison_exp"],
	storage_limit?:ValueTypes["String_comparison_exp"],
	updated_at?:ValueTypes["bigint_comparison_exp"]
};
	/** aggregate max on columns */
["mempool_delegation_max_fields"]: AliasType<{
	branch?:true,
	counter?:true,
	created_at?:true,
	delegate?:true,
	expiration_level?:true,
	fee?:true,
	gas_limit?:true,
	hash?:true,
	kind?:true,
	level?:true,
	network?:true,
	signature?:true,
	status?:true,
	storage_limit?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by max() on columns of table "mempool_delegation" */
["mempool_delegation_max_order_by"]: {
	branch?:ValueTypes["order_by"],
	counter?:ValueTypes["order_by"],
	created_at?:ValueTypes["order_by"],
	delegate?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	fee?:ValueTypes["order_by"],
	gas_limit?:ValueTypes["order_by"],
	hash?:ValueTypes["order_by"],
	kind?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	network?:ValueTypes["order_by"],
	signature?:ValueTypes["order_by"],
	status?:ValueTypes["order_by"],
	storage_limit?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate min on columns */
["mempool_delegation_min_fields"]: AliasType<{
	branch?:true,
	counter?:true,
	created_at?:true,
	delegate?:true,
	expiration_level?:true,
	fee?:true,
	gas_limit?:true,
	hash?:true,
	kind?:true,
	level?:true,
	network?:true,
	signature?:true,
	status?:true,
	storage_limit?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by min() on columns of table "mempool_delegation" */
["mempool_delegation_min_order_by"]: {
	branch?:ValueTypes["order_by"],
	counter?:ValueTypes["order_by"],
	created_at?:ValueTypes["order_by"],
	delegate?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	fee?:ValueTypes["order_by"],
	gas_limit?:ValueTypes["order_by"],
	hash?:ValueTypes["order_by"],
	kind?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	network?:ValueTypes["order_by"],
	signature?:ValueTypes["order_by"],
	status?:ValueTypes["order_by"],
	storage_limit?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** ordering options when selecting data from "mempool_delegation" */
["mempool_delegation_order_by"]: {
	branch?:ValueTypes["order_by"],
	counter?:ValueTypes["order_by"],
	created_at?:ValueTypes["order_by"],
	delegate?:ValueTypes["order_by"],
	errors?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	fee?:ValueTypes["order_by"],
	gas_limit?:ValueTypes["order_by"],
	hash?:ValueTypes["order_by"],
	kind?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	network?:ValueTypes["order_by"],
	signature?:ValueTypes["order_by"],
	status?:ValueTypes["order_by"],
	storage_limit?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** primary key columns input for table: "mempool_delegation" */
["mempool_delegation_pk_columns_input"]: {
	counter:string,
	hash:string,
	network:string
};
	/** select columns of table "mempool_delegation" */
["mempool_delegation_select_column"]:mempool_delegation_select_column;
	/** aggregate stddev on columns */
["mempool_delegation_stddev_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by stddev() on columns of table "mempool_delegation" */
["mempool_delegation_stddev_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate stddev_pop on columns */
["mempool_delegation_stddev_pop_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by stddev_pop() on columns of table "mempool_delegation" */
["mempool_delegation_stddev_pop_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate stddev_samp on columns */
["mempool_delegation_stddev_samp_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by stddev_samp() on columns of table "mempool_delegation" */
["mempool_delegation_stddev_samp_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate sum on columns */
["mempool_delegation_sum_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by sum() on columns of table "mempool_delegation" */
["mempool_delegation_sum_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate var_pop on columns */
["mempool_delegation_var_pop_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by var_pop() on columns of table "mempool_delegation" */
["mempool_delegation_var_pop_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate var_samp on columns */
["mempool_delegation_var_samp_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by var_samp() on columns of table "mempool_delegation" */
["mempool_delegation_var_samp_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate variance on columns */
["mempool_delegation_variance_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by variance() on columns of table "mempool_delegation" */
["mempool_delegation_variance_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** columns and relationships of "mempool_double_baking" */
["mempool_double_baking"]: AliasType<{
	bh_1_level?:true,
	bh_1_priority?:true,
	bh_1_proof_of_work_nonce?:true,
	bh_1_proto?:true,
	bh_1_validation_pass?:true,
	bh_2_level?:true,
	bh_2_priority?:true,
	bh_2_proof_of_work_nonce?:true,
	bh_2_proto?:true,
	bh_2_validation_pass?:true,
	branch?:true,
	created_at?:true,
errors?: [{	/** JSON select path */
	path?:string},true],
	expiration_level?:true,
	hash?:true,
	kind?:true,
	level?:true,
	network?:true,
	signature?:true,
	status?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** aggregated selection of "mempool_double_baking" */
["mempool_double_baking_aggregate"]: AliasType<{
	aggregate?:ValueTypes["mempool_double_baking_aggregate_fields"],
	nodes?:ValueTypes["mempool_double_baking"],
		__typename?: true
}>;
	/** aggregate fields of "mempool_double_baking" */
["mempool_double_baking_aggregate_fields"]: AliasType<{
	avg?:ValueTypes["mempool_double_baking_avg_fields"],
count?: [{	columns?:ValueTypes["mempool_double_baking_select_column"][],	distinct?:boolean},true],
	max?:ValueTypes["mempool_double_baking_max_fields"],
	min?:ValueTypes["mempool_double_baking_min_fields"],
	stddev?:ValueTypes["mempool_double_baking_stddev_fields"],
	stddev_pop?:ValueTypes["mempool_double_baking_stddev_pop_fields"],
	stddev_samp?:ValueTypes["mempool_double_baking_stddev_samp_fields"],
	sum?:ValueTypes["mempool_double_baking_sum_fields"],
	var_pop?:ValueTypes["mempool_double_baking_var_pop_fields"],
	var_samp?:ValueTypes["mempool_double_baking_var_samp_fields"],
	variance?:ValueTypes["mempool_double_baking_variance_fields"],
		__typename?: true
}>;
	/** order by aggregate values of table "mempool_double_baking" */
["mempool_double_baking_aggregate_order_by"]: {
	avg?:ValueTypes["mempool_double_baking_avg_order_by"],
	count?:ValueTypes["order_by"],
	max?:ValueTypes["mempool_double_baking_max_order_by"],
	min?:ValueTypes["mempool_double_baking_min_order_by"],
	stddev?:ValueTypes["mempool_double_baking_stddev_order_by"],
	stddev_pop?:ValueTypes["mempool_double_baking_stddev_pop_order_by"],
	stddev_samp?:ValueTypes["mempool_double_baking_stddev_samp_order_by"],
	sum?:ValueTypes["mempool_double_baking_sum_order_by"],
	var_pop?:ValueTypes["mempool_double_baking_var_pop_order_by"],
	var_samp?:ValueTypes["mempool_double_baking_var_samp_order_by"],
	variance?:ValueTypes["mempool_double_baking_variance_order_by"]
};
	/** aggregate avg on columns */
["mempool_double_baking_avg_fields"]: AliasType<{
	bh_1_level?:true,
	bh_1_priority?:true,
	bh_1_proto?:true,
	bh_1_validation_pass?:true,
	bh_2_level?:true,
	bh_2_priority?:true,
	bh_2_proto?:true,
	bh_2_validation_pass?:true,
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by avg() on columns of table "mempool_double_baking" */
["mempool_double_baking_avg_order_by"]: {
	bh_1_level?:ValueTypes["order_by"],
	bh_1_priority?:ValueTypes["order_by"],
	bh_1_proto?:ValueTypes["order_by"],
	bh_1_validation_pass?:ValueTypes["order_by"],
	bh_2_level?:ValueTypes["order_by"],
	bh_2_priority?:ValueTypes["order_by"],
	bh_2_proto?:ValueTypes["order_by"],
	bh_2_validation_pass?:ValueTypes["order_by"],
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** Boolean expression to filter rows from the table "mempool_double_baking". All fields are combined with a logical 'AND'. */
["mempool_double_baking_bool_exp"]: {
	_and?:(ValueTypes["mempool_double_baking_bool_exp"] | undefined)[],
	_not?:ValueTypes["mempool_double_baking_bool_exp"],
	_or?:(ValueTypes["mempool_double_baking_bool_exp"] | undefined)[],
	bh_1_level?:ValueTypes["bigint_comparison_exp"],
	bh_1_priority?:ValueTypes["bigint_comparison_exp"],
	bh_1_proof_of_work_nonce?:ValueTypes["String_comparison_exp"],
	bh_1_proto?:ValueTypes["bigint_comparison_exp"],
	bh_1_validation_pass?:ValueTypes["bigint_comparison_exp"],
	bh_2_level?:ValueTypes["bigint_comparison_exp"],
	bh_2_priority?:ValueTypes["bigint_comparison_exp"],
	bh_2_proof_of_work_nonce?:ValueTypes["String_comparison_exp"],
	bh_2_proto?:ValueTypes["bigint_comparison_exp"],
	bh_2_validation_pass?:ValueTypes["bigint_comparison_exp"],
	branch?:ValueTypes["String_comparison_exp"],
	created_at?:ValueTypes["bigint_comparison_exp"],
	errors?:ValueTypes["jsonb_comparison_exp"],
	expiration_level?:ValueTypes["bigint_comparison_exp"],
	hash?:ValueTypes["String_comparison_exp"],
	kind?:ValueTypes["String_comparison_exp"],
	level?:ValueTypes["bigint_comparison_exp"],
	network?:ValueTypes["String_comparison_exp"],
	signature?:ValueTypes["String_comparison_exp"],
	status?:ValueTypes["String_comparison_exp"],
	updated_at?:ValueTypes["bigint_comparison_exp"]
};
	/** aggregate max on columns */
["mempool_double_baking_max_fields"]: AliasType<{
	bh_1_level?:true,
	bh_1_priority?:true,
	bh_1_proof_of_work_nonce?:true,
	bh_1_proto?:true,
	bh_1_validation_pass?:true,
	bh_2_level?:true,
	bh_2_priority?:true,
	bh_2_proof_of_work_nonce?:true,
	bh_2_proto?:true,
	bh_2_validation_pass?:true,
	branch?:true,
	created_at?:true,
	expiration_level?:true,
	hash?:true,
	kind?:true,
	level?:true,
	network?:true,
	signature?:true,
	status?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by max() on columns of table "mempool_double_baking" */
["mempool_double_baking_max_order_by"]: {
	bh_1_level?:ValueTypes["order_by"],
	bh_1_priority?:ValueTypes["order_by"],
	bh_1_proof_of_work_nonce?:ValueTypes["order_by"],
	bh_1_proto?:ValueTypes["order_by"],
	bh_1_validation_pass?:ValueTypes["order_by"],
	bh_2_level?:ValueTypes["order_by"],
	bh_2_priority?:ValueTypes["order_by"],
	bh_2_proof_of_work_nonce?:ValueTypes["order_by"],
	bh_2_proto?:ValueTypes["order_by"],
	bh_2_validation_pass?:ValueTypes["order_by"],
	branch?:ValueTypes["order_by"],
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	hash?:ValueTypes["order_by"],
	kind?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	network?:ValueTypes["order_by"],
	signature?:ValueTypes["order_by"],
	status?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate min on columns */
["mempool_double_baking_min_fields"]: AliasType<{
	bh_1_level?:true,
	bh_1_priority?:true,
	bh_1_proof_of_work_nonce?:true,
	bh_1_proto?:true,
	bh_1_validation_pass?:true,
	bh_2_level?:true,
	bh_2_priority?:true,
	bh_2_proof_of_work_nonce?:true,
	bh_2_proto?:true,
	bh_2_validation_pass?:true,
	branch?:true,
	created_at?:true,
	expiration_level?:true,
	hash?:true,
	kind?:true,
	level?:true,
	network?:true,
	signature?:true,
	status?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by min() on columns of table "mempool_double_baking" */
["mempool_double_baking_min_order_by"]: {
	bh_1_level?:ValueTypes["order_by"],
	bh_1_priority?:ValueTypes["order_by"],
	bh_1_proof_of_work_nonce?:ValueTypes["order_by"],
	bh_1_proto?:ValueTypes["order_by"],
	bh_1_validation_pass?:ValueTypes["order_by"],
	bh_2_level?:ValueTypes["order_by"],
	bh_2_priority?:ValueTypes["order_by"],
	bh_2_proof_of_work_nonce?:ValueTypes["order_by"],
	bh_2_proto?:ValueTypes["order_by"],
	bh_2_validation_pass?:ValueTypes["order_by"],
	branch?:ValueTypes["order_by"],
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	hash?:ValueTypes["order_by"],
	kind?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	network?:ValueTypes["order_by"],
	signature?:ValueTypes["order_by"],
	status?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** ordering options when selecting data from "mempool_double_baking" */
["mempool_double_baking_order_by"]: {
	bh_1_level?:ValueTypes["order_by"],
	bh_1_priority?:ValueTypes["order_by"],
	bh_1_proof_of_work_nonce?:ValueTypes["order_by"],
	bh_1_proto?:ValueTypes["order_by"],
	bh_1_validation_pass?:ValueTypes["order_by"],
	bh_2_level?:ValueTypes["order_by"],
	bh_2_priority?:ValueTypes["order_by"],
	bh_2_proof_of_work_nonce?:ValueTypes["order_by"],
	bh_2_proto?:ValueTypes["order_by"],
	bh_2_validation_pass?:ValueTypes["order_by"],
	branch?:ValueTypes["order_by"],
	created_at?:ValueTypes["order_by"],
	errors?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	hash?:ValueTypes["order_by"],
	kind?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	network?:ValueTypes["order_by"],
	signature?:ValueTypes["order_by"],
	status?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** primary key columns input for table: "mempool_double_baking" */
["mempool_double_baking_pk_columns_input"]: {
	hash:string,
	network:string
};
	/** select columns of table "mempool_double_baking" */
["mempool_double_baking_select_column"]:mempool_double_baking_select_column;
	/** aggregate stddev on columns */
["mempool_double_baking_stddev_fields"]: AliasType<{
	bh_1_level?:true,
	bh_1_priority?:true,
	bh_1_proto?:true,
	bh_1_validation_pass?:true,
	bh_2_level?:true,
	bh_2_priority?:true,
	bh_2_proto?:true,
	bh_2_validation_pass?:true,
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by stddev() on columns of table "mempool_double_baking" */
["mempool_double_baking_stddev_order_by"]: {
	bh_1_level?:ValueTypes["order_by"],
	bh_1_priority?:ValueTypes["order_by"],
	bh_1_proto?:ValueTypes["order_by"],
	bh_1_validation_pass?:ValueTypes["order_by"],
	bh_2_level?:ValueTypes["order_by"],
	bh_2_priority?:ValueTypes["order_by"],
	bh_2_proto?:ValueTypes["order_by"],
	bh_2_validation_pass?:ValueTypes["order_by"],
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate stddev_pop on columns */
["mempool_double_baking_stddev_pop_fields"]: AliasType<{
	bh_1_level?:true,
	bh_1_priority?:true,
	bh_1_proto?:true,
	bh_1_validation_pass?:true,
	bh_2_level?:true,
	bh_2_priority?:true,
	bh_2_proto?:true,
	bh_2_validation_pass?:true,
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by stddev_pop() on columns of table "mempool_double_baking" */
["mempool_double_baking_stddev_pop_order_by"]: {
	bh_1_level?:ValueTypes["order_by"],
	bh_1_priority?:ValueTypes["order_by"],
	bh_1_proto?:ValueTypes["order_by"],
	bh_1_validation_pass?:ValueTypes["order_by"],
	bh_2_level?:ValueTypes["order_by"],
	bh_2_priority?:ValueTypes["order_by"],
	bh_2_proto?:ValueTypes["order_by"],
	bh_2_validation_pass?:ValueTypes["order_by"],
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate stddev_samp on columns */
["mempool_double_baking_stddev_samp_fields"]: AliasType<{
	bh_1_level?:true,
	bh_1_priority?:true,
	bh_1_proto?:true,
	bh_1_validation_pass?:true,
	bh_2_level?:true,
	bh_2_priority?:true,
	bh_2_proto?:true,
	bh_2_validation_pass?:true,
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by stddev_samp() on columns of table "mempool_double_baking" */
["mempool_double_baking_stddev_samp_order_by"]: {
	bh_1_level?:ValueTypes["order_by"],
	bh_1_priority?:ValueTypes["order_by"],
	bh_1_proto?:ValueTypes["order_by"],
	bh_1_validation_pass?:ValueTypes["order_by"],
	bh_2_level?:ValueTypes["order_by"],
	bh_2_priority?:ValueTypes["order_by"],
	bh_2_proto?:ValueTypes["order_by"],
	bh_2_validation_pass?:ValueTypes["order_by"],
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate sum on columns */
["mempool_double_baking_sum_fields"]: AliasType<{
	bh_1_level?:true,
	bh_1_priority?:true,
	bh_1_proto?:true,
	bh_1_validation_pass?:true,
	bh_2_level?:true,
	bh_2_priority?:true,
	bh_2_proto?:true,
	bh_2_validation_pass?:true,
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by sum() on columns of table "mempool_double_baking" */
["mempool_double_baking_sum_order_by"]: {
	bh_1_level?:ValueTypes["order_by"],
	bh_1_priority?:ValueTypes["order_by"],
	bh_1_proto?:ValueTypes["order_by"],
	bh_1_validation_pass?:ValueTypes["order_by"],
	bh_2_level?:ValueTypes["order_by"],
	bh_2_priority?:ValueTypes["order_by"],
	bh_2_proto?:ValueTypes["order_by"],
	bh_2_validation_pass?:ValueTypes["order_by"],
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate var_pop on columns */
["mempool_double_baking_var_pop_fields"]: AliasType<{
	bh_1_level?:true,
	bh_1_priority?:true,
	bh_1_proto?:true,
	bh_1_validation_pass?:true,
	bh_2_level?:true,
	bh_2_priority?:true,
	bh_2_proto?:true,
	bh_2_validation_pass?:true,
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by var_pop() on columns of table "mempool_double_baking" */
["mempool_double_baking_var_pop_order_by"]: {
	bh_1_level?:ValueTypes["order_by"],
	bh_1_priority?:ValueTypes["order_by"],
	bh_1_proto?:ValueTypes["order_by"],
	bh_1_validation_pass?:ValueTypes["order_by"],
	bh_2_level?:ValueTypes["order_by"],
	bh_2_priority?:ValueTypes["order_by"],
	bh_2_proto?:ValueTypes["order_by"],
	bh_2_validation_pass?:ValueTypes["order_by"],
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate var_samp on columns */
["mempool_double_baking_var_samp_fields"]: AliasType<{
	bh_1_level?:true,
	bh_1_priority?:true,
	bh_1_proto?:true,
	bh_1_validation_pass?:true,
	bh_2_level?:true,
	bh_2_priority?:true,
	bh_2_proto?:true,
	bh_2_validation_pass?:true,
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by var_samp() on columns of table "mempool_double_baking" */
["mempool_double_baking_var_samp_order_by"]: {
	bh_1_level?:ValueTypes["order_by"],
	bh_1_priority?:ValueTypes["order_by"],
	bh_1_proto?:ValueTypes["order_by"],
	bh_1_validation_pass?:ValueTypes["order_by"],
	bh_2_level?:ValueTypes["order_by"],
	bh_2_priority?:ValueTypes["order_by"],
	bh_2_proto?:ValueTypes["order_by"],
	bh_2_validation_pass?:ValueTypes["order_by"],
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate variance on columns */
["mempool_double_baking_variance_fields"]: AliasType<{
	bh_1_level?:true,
	bh_1_priority?:true,
	bh_1_proto?:true,
	bh_1_validation_pass?:true,
	bh_2_level?:true,
	bh_2_priority?:true,
	bh_2_proto?:true,
	bh_2_validation_pass?:true,
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by variance() on columns of table "mempool_double_baking" */
["mempool_double_baking_variance_order_by"]: {
	bh_1_level?:ValueTypes["order_by"],
	bh_1_priority?:ValueTypes["order_by"],
	bh_1_proto?:ValueTypes["order_by"],
	bh_1_validation_pass?:ValueTypes["order_by"],
	bh_2_level?:ValueTypes["order_by"],
	bh_2_priority?:ValueTypes["order_by"],
	bh_2_proto?:ValueTypes["order_by"],
	bh_2_validation_pass?:ValueTypes["order_by"],
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** columns and relationships of "mempool_double_endorsing" */
["mempool_double_endorsing"]: AliasType<{
	branch?:true,
	created_at?:true,
errors?: [{	/** JSON select path */
	path?:string},true],
	expiration_level?:true,
	hash?:true,
	kind?:true,
	level?:true,
	network?:true,
	op_1_kind?:true,
	op_1_level?:true,
	op_2_kind?:true,
	op_2_level?:true,
	signature?:true,
	status?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** aggregated selection of "mempool_double_endorsing" */
["mempool_double_endorsing_aggregate"]: AliasType<{
	aggregate?:ValueTypes["mempool_double_endorsing_aggregate_fields"],
	nodes?:ValueTypes["mempool_double_endorsing"],
		__typename?: true
}>;
	/** aggregate fields of "mempool_double_endorsing" */
["mempool_double_endorsing_aggregate_fields"]: AliasType<{
	avg?:ValueTypes["mempool_double_endorsing_avg_fields"],
count?: [{	columns?:ValueTypes["mempool_double_endorsing_select_column"][],	distinct?:boolean},true],
	max?:ValueTypes["mempool_double_endorsing_max_fields"],
	min?:ValueTypes["mempool_double_endorsing_min_fields"],
	stddev?:ValueTypes["mempool_double_endorsing_stddev_fields"],
	stddev_pop?:ValueTypes["mempool_double_endorsing_stddev_pop_fields"],
	stddev_samp?:ValueTypes["mempool_double_endorsing_stddev_samp_fields"],
	sum?:ValueTypes["mempool_double_endorsing_sum_fields"],
	var_pop?:ValueTypes["mempool_double_endorsing_var_pop_fields"],
	var_samp?:ValueTypes["mempool_double_endorsing_var_samp_fields"],
	variance?:ValueTypes["mempool_double_endorsing_variance_fields"],
		__typename?: true
}>;
	/** order by aggregate values of table "mempool_double_endorsing" */
["mempool_double_endorsing_aggregate_order_by"]: {
	avg?:ValueTypes["mempool_double_endorsing_avg_order_by"],
	count?:ValueTypes["order_by"],
	max?:ValueTypes["mempool_double_endorsing_max_order_by"],
	min?:ValueTypes["mempool_double_endorsing_min_order_by"],
	stddev?:ValueTypes["mempool_double_endorsing_stddev_order_by"],
	stddev_pop?:ValueTypes["mempool_double_endorsing_stddev_pop_order_by"],
	stddev_samp?:ValueTypes["mempool_double_endorsing_stddev_samp_order_by"],
	sum?:ValueTypes["mempool_double_endorsing_sum_order_by"],
	var_pop?:ValueTypes["mempool_double_endorsing_var_pop_order_by"],
	var_samp?:ValueTypes["mempool_double_endorsing_var_samp_order_by"],
	variance?:ValueTypes["mempool_double_endorsing_variance_order_by"]
};
	/** aggregate avg on columns */
["mempool_double_endorsing_avg_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	op_1_level?:true,
	op_2_level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by avg() on columns of table "mempool_double_endorsing" */
["mempool_double_endorsing_avg_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	op_1_level?:ValueTypes["order_by"],
	op_2_level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** Boolean expression to filter rows from the table "mempool_double_endorsing". All fields are combined with a logical 'AND'. */
["mempool_double_endorsing_bool_exp"]: {
	_and?:(ValueTypes["mempool_double_endorsing_bool_exp"] | undefined)[],
	_not?:ValueTypes["mempool_double_endorsing_bool_exp"],
	_or?:(ValueTypes["mempool_double_endorsing_bool_exp"] | undefined)[],
	branch?:ValueTypes["String_comparison_exp"],
	created_at?:ValueTypes["bigint_comparison_exp"],
	errors?:ValueTypes["jsonb_comparison_exp"],
	expiration_level?:ValueTypes["bigint_comparison_exp"],
	hash?:ValueTypes["String_comparison_exp"],
	kind?:ValueTypes["String_comparison_exp"],
	level?:ValueTypes["bigint_comparison_exp"],
	network?:ValueTypes["String_comparison_exp"],
	op_1_kind?:ValueTypes["String_comparison_exp"],
	op_1_level?:ValueTypes["bigint_comparison_exp"],
	op_2_kind?:ValueTypes["String_comparison_exp"],
	op_2_level?:ValueTypes["bigint_comparison_exp"],
	signature?:ValueTypes["String_comparison_exp"],
	status?:ValueTypes["String_comparison_exp"],
	updated_at?:ValueTypes["bigint_comparison_exp"]
};
	/** aggregate max on columns */
["mempool_double_endorsing_max_fields"]: AliasType<{
	branch?:true,
	created_at?:true,
	expiration_level?:true,
	hash?:true,
	kind?:true,
	level?:true,
	network?:true,
	op_1_kind?:true,
	op_1_level?:true,
	op_2_kind?:true,
	op_2_level?:true,
	signature?:true,
	status?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by max() on columns of table "mempool_double_endorsing" */
["mempool_double_endorsing_max_order_by"]: {
	branch?:ValueTypes["order_by"],
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	hash?:ValueTypes["order_by"],
	kind?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	network?:ValueTypes["order_by"],
	op_1_kind?:ValueTypes["order_by"],
	op_1_level?:ValueTypes["order_by"],
	op_2_kind?:ValueTypes["order_by"],
	op_2_level?:ValueTypes["order_by"],
	signature?:ValueTypes["order_by"],
	status?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate min on columns */
["mempool_double_endorsing_min_fields"]: AliasType<{
	branch?:true,
	created_at?:true,
	expiration_level?:true,
	hash?:true,
	kind?:true,
	level?:true,
	network?:true,
	op_1_kind?:true,
	op_1_level?:true,
	op_2_kind?:true,
	op_2_level?:true,
	signature?:true,
	status?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by min() on columns of table "mempool_double_endorsing" */
["mempool_double_endorsing_min_order_by"]: {
	branch?:ValueTypes["order_by"],
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	hash?:ValueTypes["order_by"],
	kind?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	network?:ValueTypes["order_by"],
	op_1_kind?:ValueTypes["order_by"],
	op_1_level?:ValueTypes["order_by"],
	op_2_kind?:ValueTypes["order_by"],
	op_2_level?:ValueTypes["order_by"],
	signature?:ValueTypes["order_by"],
	status?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** ordering options when selecting data from "mempool_double_endorsing" */
["mempool_double_endorsing_order_by"]: {
	branch?:ValueTypes["order_by"],
	created_at?:ValueTypes["order_by"],
	errors?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	hash?:ValueTypes["order_by"],
	kind?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	network?:ValueTypes["order_by"],
	op_1_kind?:ValueTypes["order_by"],
	op_1_level?:ValueTypes["order_by"],
	op_2_kind?:ValueTypes["order_by"],
	op_2_level?:ValueTypes["order_by"],
	signature?:ValueTypes["order_by"],
	status?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** primary key columns input for table: "mempool_double_endorsing" */
["mempool_double_endorsing_pk_columns_input"]: {
	hash:string,
	network:string
};
	/** select columns of table "mempool_double_endorsing" */
["mempool_double_endorsing_select_column"]:mempool_double_endorsing_select_column;
	/** aggregate stddev on columns */
["mempool_double_endorsing_stddev_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	op_1_level?:true,
	op_2_level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by stddev() on columns of table "mempool_double_endorsing" */
["mempool_double_endorsing_stddev_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	op_1_level?:ValueTypes["order_by"],
	op_2_level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate stddev_pop on columns */
["mempool_double_endorsing_stddev_pop_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	op_1_level?:true,
	op_2_level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by stddev_pop() on columns of table "mempool_double_endorsing" */
["mempool_double_endorsing_stddev_pop_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	op_1_level?:ValueTypes["order_by"],
	op_2_level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate stddev_samp on columns */
["mempool_double_endorsing_stddev_samp_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	op_1_level?:true,
	op_2_level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by stddev_samp() on columns of table "mempool_double_endorsing" */
["mempool_double_endorsing_stddev_samp_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	op_1_level?:ValueTypes["order_by"],
	op_2_level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate sum on columns */
["mempool_double_endorsing_sum_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	op_1_level?:true,
	op_2_level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by sum() on columns of table "mempool_double_endorsing" */
["mempool_double_endorsing_sum_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	op_1_level?:ValueTypes["order_by"],
	op_2_level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate var_pop on columns */
["mempool_double_endorsing_var_pop_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	op_1_level?:true,
	op_2_level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by var_pop() on columns of table "mempool_double_endorsing" */
["mempool_double_endorsing_var_pop_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	op_1_level?:ValueTypes["order_by"],
	op_2_level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate var_samp on columns */
["mempool_double_endorsing_var_samp_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	op_1_level?:true,
	op_2_level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by var_samp() on columns of table "mempool_double_endorsing" */
["mempool_double_endorsing_var_samp_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	op_1_level?:ValueTypes["order_by"],
	op_2_level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate variance on columns */
["mempool_double_endorsing_variance_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	op_1_level?:true,
	op_2_level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by variance() on columns of table "mempool_double_endorsing" */
["mempool_double_endorsing_variance_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	op_1_level?:ValueTypes["order_by"],
	op_2_level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** columns and relationships of "mempool_endorsement" */
["mempool_endorsement"]: AliasType<{
	baker?:true,
	branch?:true,
	created_at?:true,
errors?: [{	/** JSON select path */
	path?:string},true],
	expiration_level?:true,
	hash?:true,
	kind?:true,
	level?:true,
	network?:true,
	signature?:true,
	status?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** aggregated selection of "mempool_endorsement" */
["mempool_endorsement_aggregate"]: AliasType<{
	aggregate?:ValueTypes["mempool_endorsement_aggregate_fields"],
	nodes?:ValueTypes["mempool_endorsement"],
		__typename?: true
}>;
	/** aggregate fields of "mempool_endorsement" */
["mempool_endorsement_aggregate_fields"]: AliasType<{
	avg?:ValueTypes["mempool_endorsement_avg_fields"],
count?: [{	columns?:ValueTypes["mempool_endorsement_select_column"][],	distinct?:boolean},true],
	max?:ValueTypes["mempool_endorsement_max_fields"],
	min?:ValueTypes["mempool_endorsement_min_fields"],
	stddev?:ValueTypes["mempool_endorsement_stddev_fields"],
	stddev_pop?:ValueTypes["mempool_endorsement_stddev_pop_fields"],
	stddev_samp?:ValueTypes["mempool_endorsement_stddev_samp_fields"],
	sum?:ValueTypes["mempool_endorsement_sum_fields"],
	var_pop?:ValueTypes["mempool_endorsement_var_pop_fields"],
	var_samp?:ValueTypes["mempool_endorsement_var_samp_fields"],
	variance?:ValueTypes["mempool_endorsement_variance_fields"],
		__typename?: true
}>;
	/** order by aggregate values of table "mempool_endorsement" */
["mempool_endorsement_aggregate_order_by"]: {
	avg?:ValueTypes["mempool_endorsement_avg_order_by"],
	count?:ValueTypes["order_by"],
	max?:ValueTypes["mempool_endorsement_max_order_by"],
	min?:ValueTypes["mempool_endorsement_min_order_by"],
	stddev?:ValueTypes["mempool_endorsement_stddev_order_by"],
	stddev_pop?:ValueTypes["mempool_endorsement_stddev_pop_order_by"],
	stddev_samp?:ValueTypes["mempool_endorsement_stddev_samp_order_by"],
	sum?:ValueTypes["mempool_endorsement_sum_order_by"],
	var_pop?:ValueTypes["mempool_endorsement_var_pop_order_by"],
	var_samp?:ValueTypes["mempool_endorsement_var_samp_order_by"],
	variance?:ValueTypes["mempool_endorsement_variance_order_by"]
};
	/** aggregate avg on columns */
["mempool_endorsement_avg_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by avg() on columns of table "mempool_endorsement" */
["mempool_endorsement_avg_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** Boolean expression to filter rows from the table "mempool_endorsement". All fields are combined with a logical 'AND'. */
["mempool_endorsement_bool_exp"]: {
	_and?:(ValueTypes["mempool_endorsement_bool_exp"] | undefined)[],
	_not?:ValueTypes["mempool_endorsement_bool_exp"],
	_or?:(ValueTypes["mempool_endorsement_bool_exp"] | undefined)[],
	baker?:ValueTypes["String_comparison_exp"],
	branch?:ValueTypes["String_comparison_exp"],
	created_at?:ValueTypes["bigint_comparison_exp"],
	errors?:ValueTypes["jsonb_comparison_exp"],
	expiration_level?:ValueTypes["bigint_comparison_exp"],
	hash?:ValueTypes["String_comparison_exp"],
	kind?:ValueTypes["String_comparison_exp"],
	level?:ValueTypes["bigint_comparison_exp"],
	network?:ValueTypes["String_comparison_exp"],
	signature?:ValueTypes["String_comparison_exp"],
	status?:ValueTypes["String_comparison_exp"],
	updated_at?:ValueTypes["bigint_comparison_exp"]
};
	/** aggregate max on columns */
["mempool_endorsement_max_fields"]: AliasType<{
	baker?:true,
	branch?:true,
	created_at?:true,
	expiration_level?:true,
	hash?:true,
	kind?:true,
	level?:true,
	network?:true,
	signature?:true,
	status?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by max() on columns of table "mempool_endorsement" */
["mempool_endorsement_max_order_by"]: {
	baker?:ValueTypes["order_by"],
	branch?:ValueTypes["order_by"],
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	hash?:ValueTypes["order_by"],
	kind?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	network?:ValueTypes["order_by"],
	signature?:ValueTypes["order_by"],
	status?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate min on columns */
["mempool_endorsement_min_fields"]: AliasType<{
	baker?:true,
	branch?:true,
	created_at?:true,
	expiration_level?:true,
	hash?:true,
	kind?:true,
	level?:true,
	network?:true,
	signature?:true,
	status?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by min() on columns of table "mempool_endorsement" */
["mempool_endorsement_min_order_by"]: {
	baker?:ValueTypes["order_by"],
	branch?:ValueTypes["order_by"],
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	hash?:ValueTypes["order_by"],
	kind?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	network?:ValueTypes["order_by"],
	signature?:ValueTypes["order_by"],
	status?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** ordering options when selecting data from "mempool_endorsement" */
["mempool_endorsement_order_by"]: {
	baker?:ValueTypes["order_by"],
	branch?:ValueTypes["order_by"],
	created_at?:ValueTypes["order_by"],
	errors?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	hash?:ValueTypes["order_by"],
	kind?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	network?:ValueTypes["order_by"],
	signature?:ValueTypes["order_by"],
	status?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** primary key columns input for table: "mempool_endorsement" */
["mempool_endorsement_pk_columns_input"]: {
	hash:string,
	network:string
};
	/** select columns of table "mempool_endorsement" */
["mempool_endorsement_select_column"]:mempool_endorsement_select_column;
	/** aggregate stddev on columns */
["mempool_endorsement_stddev_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by stddev() on columns of table "mempool_endorsement" */
["mempool_endorsement_stddev_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate stddev_pop on columns */
["mempool_endorsement_stddev_pop_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by stddev_pop() on columns of table "mempool_endorsement" */
["mempool_endorsement_stddev_pop_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate stddev_samp on columns */
["mempool_endorsement_stddev_samp_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by stddev_samp() on columns of table "mempool_endorsement" */
["mempool_endorsement_stddev_samp_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate sum on columns */
["mempool_endorsement_sum_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by sum() on columns of table "mempool_endorsement" */
["mempool_endorsement_sum_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate var_pop on columns */
["mempool_endorsement_var_pop_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by var_pop() on columns of table "mempool_endorsement" */
["mempool_endorsement_var_pop_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate var_samp on columns */
["mempool_endorsement_var_samp_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by var_samp() on columns of table "mempool_endorsement" */
["mempool_endorsement_var_samp_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate variance on columns */
["mempool_endorsement_variance_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by variance() on columns of table "mempool_endorsement" */
["mempool_endorsement_variance_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** columns and relationships of "mempool_nonce_revelation" */
["mempool_nonce_revelation"]: AliasType<{
	branch?:true,
	created_at?:true,
errors?: [{	/** JSON select path */
	path?:string},true],
	expiration_level?:true,
	hash?:true,
	kind?:true,
	level?:true,
	network?:true,
	nonce?:true,
	signature?:true,
	status?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** aggregated selection of "mempool_nonce_revelation" */
["mempool_nonce_revelation_aggregate"]: AliasType<{
	aggregate?:ValueTypes["mempool_nonce_revelation_aggregate_fields"],
	nodes?:ValueTypes["mempool_nonce_revelation"],
		__typename?: true
}>;
	/** aggregate fields of "mempool_nonce_revelation" */
["mempool_nonce_revelation_aggregate_fields"]: AliasType<{
	avg?:ValueTypes["mempool_nonce_revelation_avg_fields"],
count?: [{	columns?:ValueTypes["mempool_nonce_revelation_select_column"][],	distinct?:boolean},true],
	max?:ValueTypes["mempool_nonce_revelation_max_fields"],
	min?:ValueTypes["mempool_nonce_revelation_min_fields"],
	stddev?:ValueTypes["mempool_nonce_revelation_stddev_fields"],
	stddev_pop?:ValueTypes["mempool_nonce_revelation_stddev_pop_fields"],
	stddev_samp?:ValueTypes["mempool_nonce_revelation_stddev_samp_fields"],
	sum?:ValueTypes["mempool_nonce_revelation_sum_fields"],
	var_pop?:ValueTypes["mempool_nonce_revelation_var_pop_fields"],
	var_samp?:ValueTypes["mempool_nonce_revelation_var_samp_fields"],
	variance?:ValueTypes["mempool_nonce_revelation_variance_fields"],
		__typename?: true
}>;
	/** order by aggregate values of table "mempool_nonce_revelation" */
["mempool_nonce_revelation_aggregate_order_by"]: {
	avg?:ValueTypes["mempool_nonce_revelation_avg_order_by"],
	count?:ValueTypes["order_by"],
	max?:ValueTypes["mempool_nonce_revelation_max_order_by"],
	min?:ValueTypes["mempool_nonce_revelation_min_order_by"],
	stddev?:ValueTypes["mempool_nonce_revelation_stddev_order_by"],
	stddev_pop?:ValueTypes["mempool_nonce_revelation_stddev_pop_order_by"],
	stddev_samp?:ValueTypes["mempool_nonce_revelation_stddev_samp_order_by"],
	sum?:ValueTypes["mempool_nonce_revelation_sum_order_by"],
	var_pop?:ValueTypes["mempool_nonce_revelation_var_pop_order_by"],
	var_samp?:ValueTypes["mempool_nonce_revelation_var_samp_order_by"],
	variance?:ValueTypes["mempool_nonce_revelation_variance_order_by"]
};
	/** aggregate avg on columns */
["mempool_nonce_revelation_avg_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by avg() on columns of table "mempool_nonce_revelation" */
["mempool_nonce_revelation_avg_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** Boolean expression to filter rows from the table "mempool_nonce_revelation". All fields are combined with a logical 'AND'. */
["mempool_nonce_revelation_bool_exp"]: {
	_and?:(ValueTypes["mempool_nonce_revelation_bool_exp"] | undefined)[],
	_not?:ValueTypes["mempool_nonce_revelation_bool_exp"],
	_or?:(ValueTypes["mempool_nonce_revelation_bool_exp"] | undefined)[],
	branch?:ValueTypes["String_comparison_exp"],
	created_at?:ValueTypes["bigint_comparison_exp"],
	errors?:ValueTypes["jsonb_comparison_exp"],
	expiration_level?:ValueTypes["bigint_comparison_exp"],
	hash?:ValueTypes["String_comparison_exp"],
	kind?:ValueTypes["String_comparison_exp"],
	level?:ValueTypes["bigint_comparison_exp"],
	network?:ValueTypes["String_comparison_exp"],
	nonce?:ValueTypes["String_comparison_exp"],
	signature?:ValueTypes["String_comparison_exp"],
	status?:ValueTypes["String_comparison_exp"],
	updated_at?:ValueTypes["bigint_comparison_exp"]
};
	/** aggregate max on columns */
["mempool_nonce_revelation_max_fields"]: AliasType<{
	branch?:true,
	created_at?:true,
	expiration_level?:true,
	hash?:true,
	kind?:true,
	level?:true,
	network?:true,
	nonce?:true,
	signature?:true,
	status?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by max() on columns of table "mempool_nonce_revelation" */
["mempool_nonce_revelation_max_order_by"]: {
	branch?:ValueTypes["order_by"],
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	hash?:ValueTypes["order_by"],
	kind?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	network?:ValueTypes["order_by"],
	nonce?:ValueTypes["order_by"],
	signature?:ValueTypes["order_by"],
	status?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate min on columns */
["mempool_nonce_revelation_min_fields"]: AliasType<{
	branch?:true,
	created_at?:true,
	expiration_level?:true,
	hash?:true,
	kind?:true,
	level?:true,
	network?:true,
	nonce?:true,
	signature?:true,
	status?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by min() on columns of table "mempool_nonce_revelation" */
["mempool_nonce_revelation_min_order_by"]: {
	branch?:ValueTypes["order_by"],
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	hash?:ValueTypes["order_by"],
	kind?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	network?:ValueTypes["order_by"],
	nonce?:ValueTypes["order_by"],
	signature?:ValueTypes["order_by"],
	status?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** ordering options when selecting data from "mempool_nonce_revelation" */
["mempool_nonce_revelation_order_by"]: {
	branch?:ValueTypes["order_by"],
	created_at?:ValueTypes["order_by"],
	errors?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	hash?:ValueTypes["order_by"],
	kind?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	network?:ValueTypes["order_by"],
	nonce?:ValueTypes["order_by"],
	signature?:ValueTypes["order_by"],
	status?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** primary key columns input for table: "mempool_nonce_revelation" */
["mempool_nonce_revelation_pk_columns_input"]: {
	hash:string,
	network:string
};
	/** select columns of table "mempool_nonce_revelation" */
["mempool_nonce_revelation_select_column"]:mempool_nonce_revelation_select_column;
	/** aggregate stddev on columns */
["mempool_nonce_revelation_stddev_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by stddev() on columns of table "mempool_nonce_revelation" */
["mempool_nonce_revelation_stddev_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate stddev_pop on columns */
["mempool_nonce_revelation_stddev_pop_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by stddev_pop() on columns of table "mempool_nonce_revelation" */
["mempool_nonce_revelation_stddev_pop_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate stddev_samp on columns */
["mempool_nonce_revelation_stddev_samp_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by stddev_samp() on columns of table "mempool_nonce_revelation" */
["mempool_nonce_revelation_stddev_samp_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate sum on columns */
["mempool_nonce_revelation_sum_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by sum() on columns of table "mempool_nonce_revelation" */
["mempool_nonce_revelation_sum_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate var_pop on columns */
["mempool_nonce_revelation_var_pop_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by var_pop() on columns of table "mempool_nonce_revelation" */
["mempool_nonce_revelation_var_pop_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate var_samp on columns */
["mempool_nonce_revelation_var_samp_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by var_samp() on columns of table "mempool_nonce_revelation" */
["mempool_nonce_revelation_var_samp_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate variance on columns */
["mempool_nonce_revelation_variance_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by variance() on columns of table "mempool_nonce_revelation" */
["mempool_nonce_revelation_variance_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** columns and relationships of "mempool_origination" */
["mempool_origination"]: AliasType<{
	balance?:true,
	branch?:true,
	counter?:true,
	created_at?:true,
	delegate?:true,
errors?: [{	/** JSON select path */
	path?:string},true],
	expiration_level?:true,
	fee?:true,
	gas_limit?:true,
	hash?:true,
	kind?:true,
	level?:true,
	network?:true,
	signature?:true,
	status?:true,
storage?: [{	/** JSON select path */
	path?:string},true],
	storage_limit?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** aggregated selection of "mempool_origination" */
["mempool_origination_aggregate"]: AliasType<{
	aggregate?:ValueTypes["mempool_origination_aggregate_fields"],
	nodes?:ValueTypes["mempool_origination"],
		__typename?: true
}>;
	/** aggregate fields of "mempool_origination" */
["mempool_origination_aggregate_fields"]: AliasType<{
	avg?:ValueTypes["mempool_origination_avg_fields"],
count?: [{	columns?:ValueTypes["mempool_origination_select_column"][],	distinct?:boolean},true],
	max?:ValueTypes["mempool_origination_max_fields"],
	min?:ValueTypes["mempool_origination_min_fields"],
	stddev?:ValueTypes["mempool_origination_stddev_fields"],
	stddev_pop?:ValueTypes["mempool_origination_stddev_pop_fields"],
	stddev_samp?:ValueTypes["mempool_origination_stddev_samp_fields"],
	sum?:ValueTypes["mempool_origination_sum_fields"],
	var_pop?:ValueTypes["mempool_origination_var_pop_fields"],
	var_samp?:ValueTypes["mempool_origination_var_samp_fields"],
	variance?:ValueTypes["mempool_origination_variance_fields"],
		__typename?: true
}>;
	/** order by aggregate values of table "mempool_origination" */
["mempool_origination_aggregate_order_by"]: {
	avg?:ValueTypes["mempool_origination_avg_order_by"],
	count?:ValueTypes["order_by"],
	max?:ValueTypes["mempool_origination_max_order_by"],
	min?:ValueTypes["mempool_origination_min_order_by"],
	stddev?:ValueTypes["mempool_origination_stddev_order_by"],
	stddev_pop?:ValueTypes["mempool_origination_stddev_pop_order_by"],
	stddev_samp?:ValueTypes["mempool_origination_stddev_samp_order_by"],
	sum?:ValueTypes["mempool_origination_sum_order_by"],
	var_pop?:ValueTypes["mempool_origination_var_pop_order_by"],
	var_samp?:ValueTypes["mempool_origination_var_samp_order_by"],
	variance?:ValueTypes["mempool_origination_variance_order_by"]
};
	/** aggregate avg on columns */
["mempool_origination_avg_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by avg() on columns of table "mempool_origination" */
["mempool_origination_avg_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** Boolean expression to filter rows from the table "mempool_origination". All fields are combined with a logical 'AND'. */
["mempool_origination_bool_exp"]: {
	_and?:(ValueTypes["mempool_origination_bool_exp"] | undefined)[],
	_not?:ValueTypes["mempool_origination_bool_exp"],
	_or?:(ValueTypes["mempool_origination_bool_exp"] | undefined)[],
	balance?:ValueTypes["String_comparison_exp"],
	branch?:ValueTypes["String_comparison_exp"],
	counter?:ValueTypes["String_comparison_exp"],
	created_at?:ValueTypes["bigint_comparison_exp"],
	delegate?:ValueTypes["String_comparison_exp"],
	errors?:ValueTypes["jsonb_comparison_exp"],
	expiration_level?:ValueTypes["bigint_comparison_exp"],
	fee?:ValueTypes["String_comparison_exp"],
	gas_limit?:ValueTypes["String_comparison_exp"],
	hash?:ValueTypes["String_comparison_exp"],
	kind?:ValueTypes["String_comparison_exp"],
	level?:ValueTypes["bigint_comparison_exp"],
	network?:ValueTypes["String_comparison_exp"],
	signature?:ValueTypes["String_comparison_exp"],
	status?:ValueTypes["String_comparison_exp"],
	storage?:ValueTypes["jsonb_comparison_exp"],
	storage_limit?:ValueTypes["String_comparison_exp"],
	updated_at?:ValueTypes["bigint_comparison_exp"]
};
	/** aggregate max on columns */
["mempool_origination_max_fields"]: AliasType<{
	balance?:true,
	branch?:true,
	counter?:true,
	created_at?:true,
	delegate?:true,
	expiration_level?:true,
	fee?:true,
	gas_limit?:true,
	hash?:true,
	kind?:true,
	level?:true,
	network?:true,
	signature?:true,
	status?:true,
	storage_limit?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by max() on columns of table "mempool_origination" */
["mempool_origination_max_order_by"]: {
	balance?:ValueTypes["order_by"],
	branch?:ValueTypes["order_by"],
	counter?:ValueTypes["order_by"],
	created_at?:ValueTypes["order_by"],
	delegate?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	fee?:ValueTypes["order_by"],
	gas_limit?:ValueTypes["order_by"],
	hash?:ValueTypes["order_by"],
	kind?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	network?:ValueTypes["order_by"],
	signature?:ValueTypes["order_by"],
	status?:ValueTypes["order_by"],
	storage_limit?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate min on columns */
["mempool_origination_min_fields"]: AliasType<{
	balance?:true,
	branch?:true,
	counter?:true,
	created_at?:true,
	delegate?:true,
	expiration_level?:true,
	fee?:true,
	gas_limit?:true,
	hash?:true,
	kind?:true,
	level?:true,
	network?:true,
	signature?:true,
	status?:true,
	storage_limit?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by min() on columns of table "mempool_origination" */
["mempool_origination_min_order_by"]: {
	balance?:ValueTypes["order_by"],
	branch?:ValueTypes["order_by"],
	counter?:ValueTypes["order_by"],
	created_at?:ValueTypes["order_by"],
	delegate?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	fee?:ValueTypes["order_by"],
	gas_limit?:ValueTypes["order_by"],
	hash?:ValueTypes["order_by"],
	kind?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	network?:ValueTypes["order_by"],
	signature?:ValueTypes["order_by"],
	status?:ValueTypes["order_by"],
	storage_limit?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** ordering options when selecting data from "mempool_origination" */
["mempool_origination_order_by"]: {
	balance?:ValueTypes["order_by"],
	branch?:ValueTypes["order_by"],
	counter?:ValueTypes["order_by"],
	created_at?:ValueTypes["order_by"],
	delegate?:ValueTypes["order_by"],
	errors?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	fee?:ValueTypes["order_by"],
	gas_limit?:ValueTypes["order_by"],
	hash?:ValueTypes["order_by"],
	kind?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	network?:ValueTypes["order_by"],
	signature?:ValueTypes["order_by"],
	status?:ValueTypes["order_by"],
	storage?:ValueTypes["order_by"],
	storage_limit?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** primary key columns input for table: "mempool_origination" */
["mempool_origination_pk_columns_input"]: {
	counter:string,
	hash:string,
	network:string
};
	/** select columns of table "mempool_origination" */
["mempool_origination_select_column"]:mempool_origination_select_column;
	/** aggregate stddev on columns */
["mempool_origination_stddev_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by stddev() on columns of table "mempool_origination" */
["mempool_origination_stddev_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate stddev_pop on columns */
["mempool_origination_stddev_pop_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by stddev_pop() on columns of table "mempool_origination" */
["mempool_origination_stddev_pop_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate stddev_samp on columns */
["mempool_origination_stddev_samp_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by stddev_samp() on columns of table "mempool_origination" */
["mempool_origination_stddev_samp_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate sum on columns */
["mempool_origination_sum_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by sum() on columns of table "mempool_origination" */
["mempool_origination_sum_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate var_pop on columns */
["mempool_origination_var_pop_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by var_pop() on columns of table "mempool_origination" */
["mempool_origination_var_pop_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate var_samp on columns */
["mempool_origination_var_samp_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by var_samp() on columns of table "mempool_origination" */
["mempool_origination_var_samp_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate variance on columns */
["mempool_origination_variance_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by variance() on columns of table "mempool_origination" */
["mempool_origination_variance_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** columns and relationships of "mempool_proposal" */
["mempool_proposal"]: AliasType<{
	branch?:true,
	created_at?:true,
errors?: [{	/** JSON select path */
	path?:string},true],
	expiration_level?:true,
	hash?:true,
	kind?:true,
	level?:true,
	network?:true,
	period?:true,
	proposals?:true,
	signature?:true,
	status?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** aggregated selection of "mempool_proposal" */
["mempool_proposal_aggregate"]: AliasType<{
	aggregate?:ValueTypes["mempool_proposal_aggregate_fields"],
	nodes?:ValueTypes["mempool_proposal"],
		__typename?: true
}>;
	/** aggregate fields of "mempool_proposal" */
["mempool_proposal_aggregate_fields"]: AliasType<{
	avg?:ValueTypes["mempool_proposal_avg_fields"],
count?: [{	columns?:ValueTypes["mempool_proposal_select_column"][],	distinct?:boolean},true],
	max?:ValueTypes["mempool_proposal_max_fields"],
	min?:ValueTypes["mempool_proposal_min_fields"],
	stddev?:ValueTypes["mempool_proposal_stddev_fields"],
	stddev_pop?:ValueTypes["mempool_proposal_stddev_pop_fields"],
	stddev_samp?:ValueTypes["mempool_proposal_stddev_samp_fields"],
	sum?:ValueTypes["mempool_proposal_sum_fields"],
	var_pop?:ValueTypes["mempool_proposal_var_pop_fields"],
	var_samp?:ValueTypes["mempool_proposal_var_samp_fields"],
	variance?:ValueTypes["mempool_proposal_variance_fields"],
		__typename?: true
}>;
	/** order by aggregate values of table "mempool_proposal" */
["mempool_proposal_aggregate_order_by"]: {
	avg?:ValueTypes["mempool_proposal_avg_order_by"],
	count?:ValueTypes["order_by"],
	max?:ValueTypes["mempool_proposal_max_order_by"],
	min?:ValueTypes["mempool_proposal_min_order_by"],
	stddev?:ValueTypes["mempool_proposal_stddev_order_by"],
	stddev_pop?:ValueTypes["mempool_proposal_stddev_pop_order_by"],
	stddev_samp?:ValueTypes["mempool_proposal_stddev_samp_order_by"],
	sum?:ValueTypes["mempool_proposal_sum_order_by"],
	var_pop?:ValueTypes["mempool_proposal_var_pop_order_by"],
	var_samp?:ValueTypes["mempool_proposal_var_samp_order_by"],
	variance?:ValueTypes["mempool_proposal_variance_order_by"]
};
	/** aggregate avg on columns */
["mempool_proposal_avg_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	period?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by avg() on columns of table "mempool_proposal" */
["mempool_proposal_avg_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	period?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** Boolean expression to filter rows from the table "mempool_proposal". All fields are combined with a logical 'AND'. */
["mempool_proposal_bool_exp"]: {
	_and?:(ValueTypes["mempool_proposal_bool_exp"] | undefined)[],
	_not?:ValueTypes["mempool_proposal_bool_exp"],
	_or?:(ValueTypes["mempool_proposal_bool_exp"] | undefined)[],
	branch?:ValueTypes["String_comparison_exp"],
	created_at?:ValueTypes["bigint_comparison_exp"],
	errors?:ValueTypes["jsonb_comparison_exp"],
	expiration_level?:ValueTypes["bigint_comparison_exp"],
	hash?:ValueTypes["String_comparison_exp"],
	kind?:ValueTypes["String_comparison_exp"],
	level?:ValueTypes["bigint_comparison_exp"],
	network?:ValueTypes["String_comparison_exp"],
	period?:ValueTypes["bigint_comparison_exp"],
	proposals?:ValueTypes["String_comparison_exp"],
	signature?:ValueTypes["String_comparison_exp"],
	status?:ValueTypes["String_comparison_exp"],
	updated_at?:ValueTypes["bigint_comparison_exp"]
};
	/** aggregate max on columns */
["mempool_proposal_max_fields"]: AliasType<{
	branch?:true,
	created_at?:true,
	expiration_level?:true,
	hash?:true,
	kind?:true,
	level?:true,
	network?:true,
	period?:true,
	proposals?:true,
	signature?:true,
	status?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by max() on columns of table "mempool_proposal" */
["mempool_proposal_max_order_by"]: {
	branch?:ValueTypes["order_by"],
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	hash?:ValueTypes["order_by"],
	kind?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	network?:ValueTypes["order_by"],
	period?:ValueTypes["order_by"],
	proposals?:ValueTypes["order_by"],
	signature?:ValueTypes["order_by"],
	status?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate min on columns */
["mempool_proposal_min_fields"]: AliasType<{
	branch?:true,
	created_at?:true,
	expiration_level?:true,
	hash?:true,
	kind?:true,
	level?:true,
	network?:true,
	period?:true,
	proposals?:true,
	signature?:true,
	status?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by min() on columns of table "mempool_proposal" */
["mempool_proposal_min_order_by"]: {
	branch?:ValueTypes["order_by"],
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	hash?:ValueTypes["order_by"],
	kind?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	network?:ValueTypes["order_by"],
	period?:ValueTypes["order_by"],
	proposals?:ValueTypes["order_by"],
	signature?:ValueTypes["order_by"],
	status?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** ordering options when selecting data from "mempool_proposal" */
["mempool_proposal_order_by"]: {
	branch?:ValueTypes["order_by"],
	created_at?:ValueTypes["order_by"],
	errors?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	hash?:ValueTypes["order_by"],
	kind?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	network?:ValueTypes["order_by"],
	period?:ValueTypes["order_by"],
	proposals?:ValueTypes["order_by"],
	signature?:ValueTypes["order_by"],
	status?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** primary key columns input for table: "mempool_proposal" */
["mempool_proposal_pk_columns_input"]: {
	hash:string,
	network:string
};
	/** select columns of table "mempool_proposal" */
["mempool_proposal_select_column"]:mempool_proposal_select_column;
	/** aggregate stddev on columns */
["mempool_proposal_stddev_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	period?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by stddev() on columns of table "mempool_proposal" */
["mempool_proposal_stddev_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	period?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate stddev_pop on columns */
["mempool_proposal_stddev_pop_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	period?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by stddev_pop() on columns of table "mempool_proposal" */
["mempool_proposal_stddev_pop_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	period?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate stddev_samp on columns */
["mempool_proposal_stddev_samp_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	period?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by stddev_samp() on columns of table "mempool_proposal" */
["mempool_proposal_stddev_samp_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	period?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate sum on columns */
["mempool_proposal_sum_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	period?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by sum() on columns of table "mempool_proposal" */
["mempool_proposal_sum_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	period?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate var_pop on columns */
["mempool_proposal_var_pop_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	period?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by var_pop() on columns of table "mempool_proposal" */
["mempool_proposal_var_pop_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	period?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate var_samp on columns */
["mempool_proposal_var_samp_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	period?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by var_samp() on columns of table "mempool_proposal" */
["mempool_proposal_var_samp_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	period?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate variance on columns */
["mempool_proposal_variance_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	period?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by variance() on columns of table "mempool_proposal" */
["mempool_proposal_variance_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	period?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** columns and relationships of "mempool_reveal" */
["mempool_reveal"]: AliasType<{
	branch?:true,
	counter?:true,
	created_at?:true,
errors?: [{	/** JSON select path */
	path?:string},true],
	expiration_level?:true,
	fee?:true,
	gas_limit?:true,
	hash?:true,
	kind?:true,
	level?:true,
	network?:true,
	public_key?:true,
	signature?:true,
	source?:true,
	status?:true,
	storage_limit?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** aggregated selection of "mempool_reveal" */
["mempool_reveal_aggregate"]: AliasType<{
	aggregate?:ValueTypes["mempool_reveal_aggregate_fields"],
	nodes?:ValueTypes["mempool_reveal"],
		__typename?: true
}>;
	/** aggregate fields of "mempool_reveal" */
["mempool_reveal_aggregate_fields"]: AliasType<{
	avg?:ValueTypes["mempool_reveal_avg_fields"],
count?: [{	columns?:ValueTypes["mempool_reveal_select_column"][],	distinct?:boolean},true],
	max?:ValueTypes["mempool_reveal_max_fields"],
	min?:ValueTypes["mempool_reveal_min_fields"],
	stddev?:ValueTypes["mempool_reveal_stddev_fields"],
	stddev_pop?:ValueTypes["mempool_reveal_stddev_pop_fields"],
	stddev_samp?:ValueTypes["mempool_reveal_stddev_samp_fields"],
	sum?:ValueTypes["mempool_reveal_sum_fields"],
	var_pop?:ValueTypes["mempool_reveal_var_pop_fields"],
	var_samp?:ValueTypes["mempool_reveal_var_samp_fields"],
	variance?:ValueTypes["mempool_reveal_variance_fields"],
		__typename?: true
}>;
	/** order by aggregate values of table "mempool_reveal" */
["mempool_reveal_aggregate_order_by"]: {
	avg?:ValueTypes["mempool_reveal_avg_order_by"],
	count?:ValueTypes["order_by"],
	max?:ValueTypes["mempool_reveal_max_order_by"],
	min?:ValueTypes["mempool_reveal_min_order_by"],
	stddev?:ValueTypes["mempool_reveal_stddev_order_by"],
	stddev_pop?:ValueTypes["mempool_reveal_stddev_pop_order_by"],
	stddev_samp?:ValueTypes["mempool_reveal_stddev_samp_order_by"],
	sum?:ValueTypes["mempool_reveal_sum_order_by"],
	var_pop?:ValueTypes["mempool_reveal_var_pop_order_by"],
	var_samp?:ValueTypes["mempool_reveal_var_samp_order_by"],
	variance?:ValueTypes["mempool_reveal_variance_order_by"]
};
	/** aggregate avg on columns */
["mempool_reveal_avg_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by avg() on columns of table "mempool_reveal" */
["mempool_reveal_avg_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** Boolean expression to filter rows from the table "mempool_reveal". All fields are combined with a logical 'AND'. */
["mempool_reveal_bool_exp"]: {
	_and?:(ValueTypes["mempool_reveal_bool_exp"] | undefined)[],
	_not?:ValueTypes["mempool_reveal_bool_exp"],
	_or?:(ValueTypes["mempool_reveal_bool_exp"] | undefined)[],
	branch?:ValueTypes["String_comparison_exp"],
	counter?:ValueTypes["String_comparison_exp"],
	created_at?:ValueTypes["bigint_comparison_exp"],
	errors?:ValueTypes["jsonb_comparison_exp"],
	expiration_level?:ValueTypes["bigint_comparison_exp"],
	fee?:ValueTypes["String_comparison_exp"],
	gas_limit?:ValueTypes["String_comparison_exp"],
	hash?:ValueTypes["String_comparison_exp"],
	kind?:ValueTypes["String_comparison_exp"],
	level?:ValueTypes["bigint_comparison_exp"],
	network?:ValueTypes["String_comparison_exp"],
	public_key?:ValueTypes["String_comparison_exp"],
	signature?:ValueTypes["String_comparison_exp"],
	source?:ValueTypes["String_comparison_exp"],
	status?:ValueTypes["String_comparison_exp"],
	storage_limit?:ValueTypes["String_comparison_exp"],
	updated_at?:ValueTypes["bigint_comparison_exp"]
};
	/** aggregate max on columns */
["mempool_reveal_max_fields"]: AliasType<{
	branch?:true,
	counter?:true,
	created_at?:true,
	expiration_level?:true,
	fee?:true,
	gas_limit?:true,
	hash?:true,
	kind?:true,
	level?:true,
	network?:true,
	public_key?:true,
	signature?:true,
	source?:true,
	status?:true,
	storage_limit?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by max() on columns of table "mempool_reveal" */
["mempool_reveal_max_order_by"]: {
	branch?:ValueTypes["order_by"],
	counter?:ValueTypes["order_by"],
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	fee?:ValueTypes["order_by"],
	gas_limit?:ValueTypes["order_by"],
	hash?:ValueTypes["order_by"],
	kind?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	network?:ValueTypes["order_by"],
	public_key?:ValueTypes["order_by"],
	signature?:ValueTypes["order_by"],
	source?:ValueTypes["order_by"],
	status?:ValueTypes["order_by"],
	storage_limit?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate min on columns */
["mempool_reveal_min_fields"]: AliasType<{
	branch?:true,
	counter?:true,
	created_at?:true,
	expiration_level?:true,
	fee?:true,
	gas_limit?:true,
	hash?:true,
	kind?:true,
	level?:true,
	network?:true,
	public_key?:true,
	signature?:true,
	source?:true,
	status?:true,
	storage_limit?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by min() on columns of table "mempool_reveal" */
["mempool_reveal_min_order_by"]: {
	branch?:ValueTypes["order_by"],
	counter?:ValueTypes["order_by"],
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	fee?:ValueTypes["order_by"],
	gas_limit?:ValueTypes["order_by"],
	hash?:ValueTypes["order_by"],
	kind?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	network?:ValueTypes["order_by"],
	public_key?:ValueTypes["order_by"],
	signature?:ValueTypes["order_by"],
	source?:ValueTypes["order_by"],
	status?:ValueTypes["order_by"],
	storage_limit?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** ordering options when selecting data from "mempool_reveal" */
["mempool_reveal_order_by"]: {
	branch?:ValueTypes["order_by"],
	counter?:ValueTypes["order_by"],
	created_at?:ValueTypes["order_by"],
	errors?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	fee?:ValueTypes["order_by"],
	gas_limit?:ValueTypes["order_by"],
	hash?:ValueTypes["order_by"],
	kind?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	network?:ValueTypes["order_by"],
	public_key?:ValueTypes["order_by"],
	signature?:ValueTypes["order_by"],
	source?:ValueTypes["order_by"],
	status?:ValueTypes["order_by"],
	storage_limit?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** primary key columns input for table: "mempool_reveal" */
["mempool_reveal_pk_columns_input"]: {
	counter:string,
	hash:string,
	network:string
};
	/** select columns of table "mempool_reveal" */
["mempool_reveal_select_column"]:mempool_reveal_select_column;
	/** aggregate stddev on columns */
["mempool_reveal_stddev_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by stddev() on columns of table "mempool_reveal" */
["mempool_reveal_stddev_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate stddev_pop on columns */
["mempool_reveal_stddev_pop_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by stddev_pop() on columns of table "mempool_reveal" */
["mempool_reveal_stddev_pop_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate stddev_samp on columns */
["mempool_reveal_stddev_samp_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by stddev_samp() on columns of table "mempool_reveal" */
["mempool_reveal_stddev_samp_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate sum on columns */
["mempool_reveal_sum_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by sum() on columns of table "mempool_reveal" */
["mempool_reveal_sum_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate var_pop on columns */
["mempool_reveal_var_pop_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by var_pop() on columns of table "mempool_reveal" */
["mempool_reveal_var_pop_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate var_samp on columns */
["mempool_reveal_var_samp_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by var_samp() on columns of table "mempool_reveal" */
["mempool_reveal_var_samp_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate variance on columns */
["mempool_reveal_variance_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by variance() on columns of table "mempool_reveal" */
["mempool_reveal_variance_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** columns and relationships of "mempool_transaction" */
["mempool_transaction"]: AliasType<{
	amount?:true,
	branch?:true,
	counter?:true,
	created_at?:true,
	destination?:true,
errors?: [{	/** JSON select path */
	path?:string},true],
	expiration_level?:true,
	fee?:true,
	gas_limit?:true,
	hash?:true,
	kind?:true,
	level?:true,
	network?:true,
parameters?: [{	/** JSON select path */
	path?:string},true],
	signature?:true,
	source?:true,
	status?:true,
	storage_limit?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** aggregated selection of "mempool_transaction" */
["mempool_transaction_aggregate"]: AliasType<{
	aggregate?:ValueTypes["mempool_transaction_aggregate_fields"],
	nodes?:ValueTypes["mempool_transaction"],
		__typename?: true
}>;
	/** aggregate fields of "mempool_transaction" */
["mempool_transaction_aggregate_fields"]: AliasType<{
	avg?:ValueTypes["mempool_transaction_avg_fields"],
count?: [{	columns?:ValueTypes["mempool_transaction_select_column"][],	distinct?:boolean},true],
	max?:ValueTypes["mempool_transaction_max_fields"],
	min?:ValueTypes["mempool_transaction_min_fields"],
	stddev?:ValueTypes["mempool_transaction_stddev_fields"],
	stddev_pop?:ValueTypes["mempool_transaction_stddev_pop_fields"],
	stddev_samp?:ValueTypes["mempool_transaction_stddev_samp_fields"],
	sum?:ValueTypes["mempool_transaction_sum_fields"],
	var_pop?:ValueTypes["mempool_transaction_var_pop_fields"],
	var_samp?:ValueTypes["mempool_transaction_var_samp_fields"],
	variance?:ValueTypes["mempool_transaction_variance_fields"],
		__typename?: true
}>;
	/** order by aggregate values of table "mempool_transaction" */
["mempool_transaction_aggregate_order_by"]: {
	avg?:ValueTypes["mempool_transaction_avg_order_by"],
	count?:ValueTypes["order_by"],
	max?:ValueTypes["mempool_transaction_max_order_by"],
	min?:ValueTypes["mempool_transaction_min_order_by"],
	stddev?:ValueTypes["mempool_transaction_stddev_order_by"],
	stddev_pop?:ValueTypes["mempool_transaction_stddev_pop_order_by"],
	stddev_samp?:ValueTypes["mempool_transaction_stddev_samp_order_by"],
	sum?:ValueTypes["mempool_transaction_sum_order_by"],
	var_pop?:ValueTypes["mempool_transaction_var_pop_order_by"],
	var_samp?:ValueTypes["mempool_transaction_var_samp_order_by"],
	variance?:ValueTypes["mempool_transaction_variance_order_by"]
};
	/** aggregate avg on columns */
["mempool_transaction_avg_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by avg() on columns of table "mempool_transaction" */
["mempool_transaction_avg_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** Boolean expression to filter rows from the table "mempool_transaction". All fields are combined with a logical 'AND'. */
["mempool_transaction_bool_exp"]: {
	_and?:(ValueTypes["mempool_transaction_bool_exp"] | undefined)[],
	_not?:ValueTypes["mempool_transaction_bool_exp"],
	_or?:(ValueTypes["mempool_transaction_bool_exp"] | undefined)[],
	amount?:ValueTypes["String_comparison_exp"],
	branch?:ValueTypes["String_comparison_exp"],
	counter?:ValueTypes["String_comparison_exp"],
	created_at?:ValueTypes["bigint_comparison_exp"],
	destination?:ValueTypes["String_comparison_exp"],
	errors?:ValueTypes["jsonb_comparison_exp"],
	expiration_level?:ValueTypes["bigint_comparison_exp"],
	fee?:ValueTypes["String_comparison_exp"],
	gas_limit?:ValueTypes["String_comparison_exp"],
	hash?:ValueTypes["String_comparison_exp"],
	kind?:ValueTypes["String_comparison_exp"],
	level?:ValueTypes["bigint_comparison_exp"],
	network?:ValueTypes["String_comparison_exp"],
	parameters?:ValueTypes["jsonb_comparison_exp"],
	signature?:ValueTypes["String_comparison_exp"],
	source?:ValueTypes["String_comparison_exp"],
	status?:ValueTypes["String_comparison_exp"],
	storage_limit?:ValueTypes["String_comparison_exp"],
	updated_at?:ValueTypes["bigint_comparison_exp"]
};
	/** aggregate max on columns */
["mempool_transaction_max_fields"]: AliasType<{
	amount?:true,
	branch?:true,
	counter?:true,
	created_at?:true,
	destination?:true,
	expiration_level?:true,
	fee?:true,
	gas_limit?:true,
	hash?:true,
	kind?:true,
	level?:true,
	network?:true,
	signature?:true,
	source?:true,
	status?:true,
	storage_limit?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by max() on columns of table "mempool_transaction" */
["mempool_transaction_max_order_by"]: {
	amount?:ValueTypes["order_by"],
	branch?:ValueTypes["order_by"],
	counter?:ValueTypes["order_by"],
	created_at?:ValueTypes["order_by"],
	destination?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	fee?:ValueTypes["order_by"],
	gas_limit?:ValueTypes["order_by"],
	hash?:ValueTypes["order_by"],
	kind?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	network?:ValueTypes["order_by"],
	signature?:ValueTypes["order_by"],
	source?:ValueTypes["order_by"],
	status?:ValueTypes["order_by"],
	storage_limit?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate min on columns */
["mempool_transaction_min_fields"]: AliasType<{
	amount?:true,
	branch?:true,
	counter?:true,
	created_at?:true,
	destination?:true,
	expiration_level?:true,
	fee?:true,
	gas_limit?:true,
	hash?:true,
	kind?:true,
	level?:true,
	network?:true,
	signature?:true,
	source?:true,
	status?:true,
	storage_limit?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by min() on columns of table "mempool_transaction" */
["mempool_transaction_min_order_by"]: {
	amount?:ValueTypes["order_by"],
	branch?:ValueTypes["order_by"],
	counter?:ValueTypes["order_by"],
	created_at?:ValueTypes["order_by"],
	destination?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	fee?:ValueTypes["order_by"],
	gas_limit?:ValueTypes["order_by"],
	hash?:ValueTypes["order_by"],
	kind?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	network?:ValueTypes["order_by"],
	signature?:ValueTypes["order_by"],
	source?:ValueTypes["order_by"],
	status?:ValueTypes["order_by"],
	storage_limit?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** ordering options when selecting data from "mempool_transaction" */
["mempool_transaction_order_by"]: {
	amount?:ValueTypes["order_by"],
	branch?:ValueTypes["order_by"],
	counter?:ValueTypes["order_by"],
	created_at?:ValueTypes["order_by"],
	destination?:ValueTypes["order_by"],
	errors?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	fee?:ValueTypes["order_by"],
	gas_limit?:ValueTypes["order_by"],
	hash?:ValueTypes["order_by"],
	kind?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	network?:ValueTypes["order_by"],
	parameters?:ValueTypes["order_by"],
	signature?:ValueTypes["order_by"],
	source?:ValueTypes["order_by"],
	status?:ValueTypes["order_by"],
	storage_limit?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** primary key columns input for table: "mempool_transaction" */
["mempool_transaction_pk_columns_input"]: {
	counter:string,
	hash:string,
	network:string
};
	/** select columns of table "mempool_transaction" */
["mempool_transaction_select_column"]:mempool_transaction_select_column;
	/** aggregate stddev on columns */
["mempool_transaction_stddev_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by stddev() on columns of table "mempool_transaction" */
["mempool_transaction_stddev_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate stddev_pop on columns */
["mempool_transaction_stddev_pop_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by stddev_pop() on columns of table "mempool_transaction" */
["mempool_transaction_stddev_pop_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate stddev_samp on columns */
["mempool_transaction_stddev_samp_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by stddev_samp() on columns of table "mempool_transaction" */
["mempool_transaction_stddev_samp_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate sum on columns */
["mempool_transaction_sum_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by sum() on columns of table "mempool_transaction" */
["mempool_transaction_sum_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate var_pop on columns */
["mempool_transaction_var_pop_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by var_pop() on columns of table "mempool_transaction" */
["mempool_transaction_var_pop_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate var_samp on columns */
["mempool_transaction_var_samp_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by var_samp() on columns of table "mempool_transaction" */
["mempool_transaction_var_samp_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** aggregate variance on columns */
["mempool_transaction_variance_fields"]: AliasType<{
	created_at?:true,
	expiration_level?:true,
	level?:true,
	updated_at?:true,
		__typename?: true
}>;
	/** order by variance() on columns of table "mempool_transaction" */
["mempool_transaction_variance_order_by"]: {
	created_at?:ValueTypes["order_by"],
	expiration_level?:ValueTypes["order_by"],
	level?:ValueTypes["order_by"],
	updated_at?:ValueTypes["order_by"]
};
	/** column ordering options */
["order_by"]:order_by;
	/** query root */
["query_root"]: AliasType<{
mempool_activate_account?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["mempool_activate_account_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["mempool_activate_account_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["mempool_activate_account_bool_exp"]},ValueTypes["mempool_activate_account"]],
mempool_activate_account_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["mempool_activate_account_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["mempool_activate_account_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["mempool_activate_account_bool_exp"]},ValueTypes["mempool_activate_account_aggregate"]],
mempool_activate_account_by_pk?: [{	hash:string,	network:string},ValueTypes["mempool_activate_account"]],
mempool_ballot?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["mempool_ballot_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["mempool_ballot_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["mempool_ballot_bool_exp"]},ValueTypes["mempool_ballot"]],
mempool_ballot_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["mempool_ballot_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["mempool_ballot_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["mempool_ballot_bool_exp"]},ValueTypes["mempool_ballot_aggregate"]],
mempool_ballot_by_pk?: [{	hash:string,	network:string},ValueTypes["mempool_ballot"]],
mempool_delegation?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["mempool_delegation_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["mempool_delegation_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["mempool_delegation_bool_exp"]},ValueTypes["mempool_delegation"]],
mempool_delegation_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["mempool_delegation_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["mempool_delegation_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["mempool_delegation_bool_exp"]},ValueTypes["mempool_delegation_aggregate"]],
mempool_delegation_by_pk?: [{	counter:string,	hash:string,	network:string},ValueTypes["mempool_delegation"]],
mempool_double_baking?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["mempool_double_baking_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["mempool_double_baking_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["mempool_double_baking_bool_exp"]},ValueTypes["mempool_double_baking"]],
mempool_double_baking_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["mempool_double_baking_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["mempool_double_baking_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["mempool_double_baking_bool_exp"]},ValueTypes["mempool_double_baking_aggregate"]],
mempool_double_baking_by_pk?: [{	hash:string,	network:string},ValueTypes["mempool_double_baking"]],
mempool_double_endorsing?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["mempool_double_endorsing_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["mempool_double_endorsing_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["mempool_double_endorsing_bool_exp"]},ValueTypes["mempool_double_endorsing"]],
mempool_double_endorsing_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["mempool_double_endorsing_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["mempool_double_endorsing_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["mempool_double_endorsing_bool_exp"]},ValueTypes["mempool_double_endorsing_aggregate"]],
mempool_double_endorsing_by_pk?: [{	hash:string,	network:string},ValueTypes["mempool_double_endorsing"]],
mempool_endorsement?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["mempool_endorsement_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["mempool_endorsement_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["mempool_endorsement_bool_exp"]},ValueTypes["mempool_endorsement"]],
mempool_endorsement_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["mempool_endorsement_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["mempool_endorsement_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["mempool_endorsement_bool_exp"]},ValueTypes["mempool_endorsement_aggregate"]],
mempool_endorsement_by_pk?: [{	hash:string,	network:string},ValueTypes["mempool_endorsement"]],
mempool_nonce_revelation?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["mempool_nonce_revelation_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["mempool_nonce_revelation_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["mempool_nonce_revelation_bool_exp"]},ValueTypes["mempool_nonce_revelation"]],
mempool_nonce_revelation_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["mempool_nonce_revelation_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["mempool_nonce_revelation_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["mempool_nonce_revelation_bool_exp"]},ValueTypes["mempool_nonce_revelation_aggregate"]],
mempool_nonce_revelation_by_pk?: [{	hash:string,	network:string},ValueTypes["mempool_nonce_revelation"]],
mempool_origination?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["mempool_origination_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["mempool_origination_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["mempool_origination_bool_exp"]},ValueTypes["mempool_origination"]],
mempool_origination_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["mempool_origination_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["mempool_origination_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["mempool_origination_bool_exp"]},ValueTypes["mempool_origination_aggregate"]],
mempool_origination_by_pk?: [{	counter:string,	hash:string,	network:string},ValueTypes["mempool_origination"]],
mempool_proposal?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["mempool_proposal_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["mempool_proposal_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["mempool_proposal_bool_exp"]},ValueTypes["mempool_proposal"]],
mempool_proposal_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["mempool_proposal_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["mempool_proposal_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["mempool_proposal_bool_exp"]},ValueTypes["mempool_proposal_aggregate"]],
mempool_proposal_by_pk?: [{	hash:string,	network:string},ValueTypes["mempool_proposal"]],
mempool_reveal?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["mempool_reveal_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["mempool_reveal_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["mempool_reveal_bool_exp"]},ValueTypes["mempool_reveal"]],
mempool_reveal_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["mempool_reveal_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["mempool_reveal_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["mempool_reveal_bool_exp"]},ValueTypes["mempool_reveal_aggregate"]],
mempool_reveal_by_pk?: [{	counter:string,	hash:string,	network:string},ValueTypes["mempool_reveal"]],
mempool_transaction?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["mempool_transaction_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["mempool_transaction_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["mempool_transaction_bool_exp"]},ValueTypes["mempool_transaction"]],
mempool_transaction_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["mempool_transaction_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["mempool_transaction_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["mempool_transaction_bool_exp"]},ValueTypes["mempool_transaction_aggregate"]],
mempool_transaction_by_pk?: [{	counter:string,	hash:string,	network:string},ValueTypes["mempool_transaction"]],
		__typename?: true
}>;
	/** subscription root */
["subscription_root"]: AliasType<{
mempool_activate_account?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["mempool_activate_account_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["mempool_activate_account_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["mempool_activate_account_bool_exp"]},ValueTypes["mempool_activate_account"]],
mempool_activate_account_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["mempool_activate_account_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["mempool_activate_account_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["mempool_activate_account_bool_exp"]},ValueTypes["mempool_activate_account_aggregate"]],
mempool_activate_account_by_pk?: [{	hash:string,	network:string},ValueTypes["mempool_activate_account"]],
mempool_ballot?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["mempool_ballot_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["mempool_ballot_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["mempool_ballot_bool_exp"]},ValueTypes["mempool_ballot"]],
mempool_ballot_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["mempool_ballot_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["mempool_ballot_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["mempool_ballot_bool_exp"]},ValueTypes["mempool_ballot_aggregate"]],
mempool_ballot_by_pk?: [{	hash:string,	network:string},ValueTypes["mempool_ballot"]],
mempool_delegation?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["mempool_delegation_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["mempool_delegation_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["mempool_delegation_bool_exp"]},ValueTypes["mempool_delegation"]],
mempool_delegation_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["mempool_delegation_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["mempool_delegation_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["mempool_delegation_bool_exp"]},ValueTypes["mempool_delegation_aggregate"]],
mempool_delegation_by_pk?: [{	counter:string,	hash:string,	network:string},ValueTypes["mempool_delegation"]],
mempool_double_baking?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["mempool_double_baking_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["mempool_double_baking_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["mempool_double_baking_bool_exp"]},ValueTypes["mempool_double_baking"]],
mempool_double_baking_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["mempool_double_baking_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["mempool_double_baking_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["mempool_double_baking_bool_exp"]},ValueTypes["mempool_double_baking_aggregate"]],
mempool_double_baking_by_pk?: [{	hash:string,	network:string},ValueTypes["mempool_double_baking"]],
mempool_double_endorsing?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["mempool_double_endorsing_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["mempool_double_endorsing_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["mempool_double_endorsing_bool_exp"]},ValueTypes["mempool_double_endorsing"]],
mempool_double_endorsing_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["mempool_double_endorsing_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["mempool_double_endorsing_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["mempool_double_endorsing_bool_exp"]},ValueTypes["mempool_double_endorsing_aggregate"]],
mempool_double_endorsing_by_pk?: [{	hash:string,	network:string},ValueTypes["mempool_double_endorsing"]],
mempool_endorsement?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["mempool_endorsement_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["mempool_endorsement_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["mempool_endorsement_bool_exp"]},ValueTypes["mempool_endorsement"]],
mempool_endorsement_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["mempool_endorsement_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["mempool_endorsement_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["mempool_endorsement_bool_exp"]},ValueTypes["mempool_endorsement_aggregate"]],
mempool_endorsement_by_pk?: [{	hash:string,	network:string},ValueTypes["mempool_endorsement"]],
mempool_nonce_revelation?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["mempool_nonce_revelation_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["mempool_nonce_revelation_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["mempool_nonce_revelation_bool_exp"]},ValueTypes["mempool_nonce_revelation"]],
mempool_nonce_revelation_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["mempool_nonce_revelation_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["mempool_nonce_revelation_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["mempool_nonce_revelation_bool_exp"]},ValueTypes["mempool_nonce_revelation_aggregate"]],
mempool_nonce_revelation_by_pk?: [{	hash:string,	network:string},ValueTypes["mempool_nonce_revelation"]],
mempool_origination?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["mempool_origination_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["mempool_origination_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["mempool_origination_bool_exp"]},ValueTypes["mempool_origination"]],
mempool_origination_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["mempool_origination_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["mempool_origination_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["mempool_origination_bool_exp"]},ValueTypes["mempool_origination_aggregate"]],
mempool_origination_by_pk?: [{	counter:string,	hash:string,	network:string},ValueTypes["mempool_origination"]],
mempool_proposal?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["mempool_proposal_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["mempool_proposal_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["mempool_proposal_bool_exp"]},ValueTypes["mempool_proposal"]],
mempool_proposal_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["mempool_proposal_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["mempool_proposal_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["mempool_proposal_bool_exp"]},ValueTypes["mempool_proposal_aggregate"]],
mempool_proposal_by_pk?: [{	hash:string,	network:string},ValueTypes["mempool_proposal"]],
mempool_reveal?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["mempool_reveal_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["mempool_reveal_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["mempool_reveal_bool_exp"]},ValueTypes["mempool_reveal"]],
mempool_reveal_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["mempool_reveal_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["mempool_reveal_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["mempool_reveal_bool_exp"]},ValueTypes["mempool_reveal_aggregate"]],
mempool_reveal_by_pk?: [{	counter:string,	hash:string,	network:string},ValueTypes["mempool_reveal"]],
mempool_transaction?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["mempool_transaction_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["mempool_transaction_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["mempool_transaction_bool_exp"]},ValueTypes["mempool_transaction"]],
mempool_transaction_aggregate?: [{	/** distinct select on columns */
	distinct_on?:ValueTypes["mempool_transaction_select_column"][],	/** limit the number of rows returned */
	limit?:number,	/** skip the first n rows. Use only with order_by */
	offset?:number,	/** sort the rows by one or more columns */
	order_by?:ValueTypes["mempool_transaction_order_by"][],	/** filter the rows returned */
	where?:ValueTypes["mempool_transaction_bool_exp"]},ValueTypes["mempool_transaction_aggregate"]],
mempool_transaction_by_pk?: [{	counter:string,	hash:string,	network:string},ValueTypes["mempool_transaction"]],
		__typename?: true
}>
  }

export type ModelTypes = {
    /** expression to compare columns of type String. All fields are combined with logical 'AND'. */
["String_comparison_exp"]: GraphQLTypes["String_comparison_exp"];
	["bigint"]:any;
	/** expression to compare columns of type bigint. All fields are combined with logical 'AND'. */
["bigint_comparison_exp"]: GraphQLTypes["bigint_comparison_exp"];
	["jsonb"]:any;
	/** expression to compare columns of type jsonb. All fields are combined with logical 'AND'. */
["jsonb_comparison_exp"]: GraphQLTypes["jsonb_comparison_exp"];
	/** columns and relationships of "mempool_activate_account" */
["mempool_activate_account"]: {
		branch?:string,
	created_at?:ModelTypes["bigint"],
	errors?:ModelTypes["jsonb"],
	expiration_level?:ModelTypes["bigint"],
	hash:string,
	kind?:string,
	level?:ModelTypes["bigint"],
	network:string,
	pkh?:string,
	secret?:string,
	signature?:string,
	status?:string,
	updated_at?:ModelTypes["bigint"]
};
	/** aggregated selection of "mempool_activate_account" */
["mempool_activate_account_aggregate"]: {
		aggregate?:ModelTypes["mempool_activate_account_aggregate_fields"],
	nodes:ModelTypes["mempool_activate_account"][]
};
	/** aggregate fields of "mempool_activate_account" */
["mempool_activate_account_aggregate_fields"]: {
		avg?:ModelTypes["mempool_activate_account_avg_fields"],
	count?:number,
	max?:ModelTypes["mempool_activate_account_max_fields"],
	min?:ModelTypes["mempool_activate_account_min_fields"],
	stddev?:ModelTypes["mempool_activate_account_stddev_fields"],
	stddev_pop?:ModelTypes["mempool_activate_account_stddev_pop_fields"],
	stddev_samp?:ModelTypes["mempool_activate_account_stddev_samp_fields"],
	sum?:ModelTypes["mempool_activate_account_sum_fields"],
	var_pop?:ModelTypes["mempool_activate_account_var_pop_fields"],
	var_samp?:ModelTypes["mempool_activate_account_var_samp_fields"],
	variance?:ModelTypes["mempool_activate_account_variance_fields"]
};
	/** order by aggregate values of table "mempool_activate_account" */
["mempool_activate_account_aggregate_order_by"]: GraphQLTypes["mempool_activate_account_aggregate_order_by"];
	/** aggregate avg on columns */
["mempool_activate_account_avg_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	updated_at?:number
};
	/** order by avg() on columns of table "mempool_activate_account" */
["mempool_activate_account_avg_order_by"]: GraphQLTypes["mempool_activate_account_avg_order_by"];
	/** Boolean expression to filter rows from the table "mempool_activate_account". All fields are combined with a logical 'AND'. */
["mempool_activate_account_bool_exp"]: GraphQLTypes["mempool_activate_account_bool_exp"];
	/** aggregate max on columns */
["mempool_activate_account_max_fields"]: {
		branch?:string,
	created_at?:ModelTypes["bigint"],
	expiration_level?:ModelTypes["bigint"],
	hash?:string,
	kind?:string,
	level?:ModelTypes["bigint"],
	network?:string,
	pkh?:string,
	secret?:string,
	signature?:string,
	status?:string,
	updated_at?:ModelTypes["bigint"]
};
	/** order by max() on columns of table "mempool_activate_account" */
["mempool_activate_account_max_order_by"]: GraphQLTypes["mempool_activate_account_max_order_by"];
	/** aggregate min on columns */
["mempool_activate_account_min_fields"]: {
		branch?:string,
	created_at?:ModelTypes["bigint"],
	expiration_level?:ModelTypes["bigint"],
	hash?:string,
	kind?:string,
	level?:ModelTypes["bigint"],
	network?:string,
	pkh?:string,
	secret?:string,
	signature?:string,
	status?:string,
	updated_at?:ModelTypes["bigint"]
};
	/** order by min() on columns of table "mempool_activate_account" */
["mempool_activate_account_min_order_by"]: GraphQLTypes["mempool_activate_account_min_order_by"];
	/** ordering options when selecting data from "mempool_activate_account" */
["mempool_activate_account_order_by"]: GraphQLTypes["mempool_activate_account_order_by"];
	/** primary key columns input for table: "mempool_activate_account" */
["mempool_activate_account_pk_columns_input"]: GraphQLTypes["mempool_activate_account_pk_columns_input"];
	/** select columns of table "mempool_activate_account" */
["mempool_activate_account_select_column"]: GraphQLTypes["mempool_activate_account_select_column"];
	/** aggregate stddev on columns */
["mempool_activate_account_stddev_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	updated_at?:number
};
	/** order by stddev() on columns of table "mempool_activate_account" */
["mempool_activate_account_stddev_order_by"]: GraphQLTypes["mempool_activate_account_stddev_order_by"];
	/** aggregate stddev_pop on columns */
["mempool_activate_account_stddev_pop_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	updated_at?:number
};
	/** order by stddev_pop() on columns of table "mempool_activate_account" */
["mempool_activate_account_stddev_pop_order_by"]: GraphQLTypes["mempool_activate_account_stddev_pop_order_by"];
	/** aggregate stddev_samp on columns */
["mempool_activate_account_stddev_samp_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	updated_at?:number
};
	/** order by stddev_samp() on columns of table "mempool_activate_account" */
["mempool_activate_account_stddev_samp_order_by"]: GraphQLTypes["mempool_activate_account_stddev_samp_order_by"];
	/** aggregate sum on columns */
["mempool_activate_account_sum_fields"]: {
		created_at?:ModelTypes["bigint"],
	expiration_level?:ModelTypes["bigint"],
	level?:ModelTypes["bigint"],
	updated_at?:ModelTypes["bigint"]
};
	/** order by sum() on columns of table "mempool_activate_account" */
["mempool_activate_account_sum_order_by"]: GraphQLTypes["mempool_activate_account_sum_order_by"];
	/** aggregate var_pop on columns */
["mempool_activate_account_var_pop_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	updated_at?:number
};
	/** order by var_pop() on columns of table "mempool_activate_account" */
["mempool_activate_account_var_pop_order_by"]: GraphQLTypes["mempool_activate_account_var_pop_order_by"];
	/** aggregate var_samp on columns */
["mempool_activate_account_var_samp_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	updated_at?:number
};
	/** order by var_samp() on columns of table "mempool_activate_account" */
["mempool_activate_account_var_samp_order_by"]: GraphQLTypes["mempool_activate_account_var_samp_order_by"];
	/** aggregate variance on columns */
["mempool_activate_account_variance_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	updated_at?:number
};
	/** order by variance() on columns of table "mempool_activate_account" */
["mempool_activate_account_variance_order_by"]: GraphQLTypes["mempool_activate_account_variance_order_by"];
	/** columns and relationships of "mempool_ballot" */
["mempool_ballot"]: {
		ballot?:string,
	branch?:string,
	created_at?:ModelTypes["bigint"],
	errors?:ModelTypes["jsonb"],
	expiration_level?:ModelTypes["bigint"],
	hash:string,
	kind?:string,
	level?:ModelTypes["bigint"],
	network:string,
	period?:ModelTypes["bigint"],
	signature?:string,
	status?:string,
	updated_at?:ModelTypes["bigint"]
};
	/** aggregated selection of "mempool_ballot" */
["mempool_ballot_aggregate"]: {
		aggregate?:ModelTypes["mempool_ballot_aggregate_fields"],
	nodes:ModelTypes["mempool_ballot"][]
};
	/** aggregate fields of "mempool_ballot" */
["mempool_ballot_aggregate_fields"]: {
		avg?:ModelTypes["mempool_ballot_avg_fields"],
	count?:number,
	max?:ModelTypes["mempool_ballot_max_fields"],
	min?:ModelTypes["mempool_ballot_min_fields"],
	stddev?:ModelTypes["mempool_ballot_stddev_fields"],
	stddev_pop?:ModelTypes["mempool_ballot_stddev_pop_fields"],
	stddev_samp?:ModelTypes["mempool_ballot_stddev_samp_fields"],
	sum?:ModelTypes["mempool_ballot_sum_fields"],
	var_pop?:ModelTypes["mempool_ballot_var_pop_fields"],
	var_samp?:ModelTypes["mempool_ballot_var_samp_fields"],
	variance?:ModelTypes["mempool_ballot_variance_fields"]
};
	/** order by aggregate values of table "mempool_ballot" */
["mempool_ballot_aggregate_order_by"]: GraphQLTypes["mempool_ballot_aggregate_order_by"];
	/** aggregate avg on columns */
["mempool_ballot_avg_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	period?:number,
	updated_at?:number
};
	/** order by avg() on columns of table "mempool_ballot" */
["mempool_ballot_avg_order_by"]: GraphQLTypes["mempool_ballot_avg_order_by"];
	/** Boolean expression to filter rows from the table "mempool_ballot". All fields are combined with a logical 'AND'. */
["mempool_ballot_bool_exp"]: GraphQLTypes["mempool_ballot_bool_exp"];
	/** aggregate max on columns */
["mempool_ballot_max_fields"]: {
		ballot?:string,
	branch?:string,
	created_at?:ModelTypes["bigint"],
	expiration_level?:ModelTypes["bigint"],
	hash?:string,
	kind?:string,
	level?:ModelTypes["bigint"],
	network?:string,
	period?:ModelTypes["bigint"],
	signature?:string,
	status?:string,
	updated_at?:ModelTypes["bigint"]
};
	/** order by max() on columns of table "mempool_ballot" */
["mempool_ballot_max_order_by"]: GraphQLTypes["mempool_ballot_max_order_by"];
	/** aggregate min on columns */
["mempool_ballot_min_fields"]: {
		ballot?:string,
	branch?:string,
	created_at?:ModelTypes["bigint"],
	expiration_level?:ModelTypes["bigint"],
	hash?:string,
	kind?:string,
	level?:ModelTypes["bigint"],
	network?:string,
	period?:ModelTypes["bigint"],
	signature?:string,
	status?:string,
	updated_at?:ModelTypes["bigint"]
};
	/** order by min() on columns of table "mempool_ballot" */
["mempool_ballot_min_order_by"]: GraphQLTypes["mempool_ballot_min_order_by"];
	/** ordering options when selecting data from "mempool_ballot" */
["mempool_ballot_order_by"]: GraphQLTypes["mempool_ballot_order_by"];
	/** primary key columns input for table: "mempool_ballot" */
["mempool_ballot_pk_columns_input"]: GraphQLTypes["mempool_ballot_pk_columns_input"];
	/** select columns of table "mempool_ballot" */
["mempool_ballot_select_column"]: GraphQLTypes["mempool_ballot_select_column"];
	/** aggregate stddev on columns */
["mempool_ballot_stddev_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	period?:number,
	updated_at?:number
};
	/** order by stddev() on columns of table "mempool_ballot" */
["mempool_ballot_stddev_order_by"]: GraphQLTypes["mempool_ballot_stddev_order_by"];
	/** aggregate stddev_pop on columns */
["mempool_ballot_stddev_pop_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	period?:number,
	updated_at?:number
};
	/** order by stddev_pop() on columns of table "mempool_ballot" */
["mempool_ballot_stddev_pop_order_by"]: GraphQLTypes["mempool_ballot_stddev_pop_order_by"];
	/** aggregate stddev_samp on columns */
["mempool_ballot_stddev_samp_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	period?:number,
	updated_at?:number
};
	/** order by stddev_samp() on columns of table "mempool_ballot" */
["mempool_ballot_stddev_samp_order_by"]: GraphQLTypes["mempool_ballot_stddev_samp_order_by"];
	/** aggregate sum on columns */
["mempool_ballot_sum_fields"]: {
		created_at?:ModelTypes["bigint"],
	expiration_level?:ModelTypes["bigint"],
	level?:ModelTypes["bigint"],
	period?:ModelTypes["bigint"],
	updated_at?:ModelTypes["bigint"]
};
	/** order by sum() on columns of table "mempool_ballot" */
["mempool_ballot_sum_order_by"]: GraphQLTypes["mempool_ballot_sum_order_by"];
	/** aggregate var_pop on columns */
["mempool_ballot_var_pop_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	period?:number,
	updated_at?:number
};
	/** order by var_pop() on columns of table "mempool_ballot" */
["mempool_ballot_var_pop_order_by"]: GraphQLTypes["mempool_ballot_var_pop_order_by"];
	/** aggregate var_samp on columns */
["mempool_ballot_var_samp_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	period?:number,
	updated_at?:number
};
	/** order by var_samp() on columns of table "mempool_ballot" */
["mempool_ballot_var_samp_order_by"]: GraphQLTypes["mempool_ballot_var_samp_order_by"];
	/** aggregate variance on columns */
["mempool_ballot_variance_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	period?:number,
	updated_at?:number
};
	/** order by variance() on columns of table "mempool_ballot" */
["mempool_ballot_variance_order_by"]: GraphQLTypes["mempool_ballot_variance_order_by"];
	/** columns and relationships of "mempool_delegation" */
["mempool_delegation"]: {
		branch?:string,
	counter:string,
	created_at?:ModelTypes["bigint"],
	delegate?:string,
	errors?:ModelTypes["jsonb"],
	expiration_level?:ModelTypes["bigint"],
	fee?:string,
	gas_limit?:string,
	hash:string,
	kind?:string,
	level?:ModelTypes["bigint"],
	network:string,
	signature?:string,
	status?:string,
	storage_limit?:string,
	updated_at?:ModelTypes["bigint"]
};
	/** aggregated selection of "mempool_delegation" */
["mempool_delegation_aggregate"]: {
		aggregate?:ModelTypes["mempool_delegation_aggregate_fields"],
	nodes:ModelTypes["mempool_delegation"][]
};
	/** aggregate fields of "mempool_delegation" */
["mempool_delegation_aggregate_fields"]: {
		avg?:ModelTypes["mempool_delegation_avg_fields"],
	count?:number,
	max?:ModelTypes["mempool_delegation_max_fields"],
	min?:ModelTypes["mempool_delegation_min_fields"],
	stddev?:ModelTypes["mempool_delegation_stddev_fields"],
	stddev_pop?:ModelTypes["mempool_delegation_stddev_pop_fields"],
	stddev_samp?:ModelTypes["mempool_delegation_stddev_samp_fields"],
	sum?:ModelTypes["mempool_delegation_sum_fields"],
	var_pop?:ModelTypes["mempool_delegation_var_pop_fields"],
	var_samp?:ModelTypes["mempool_delegation_var_samp_fields"],
	variance?:ModelTypes["mempool_delegation_variance_fields"]
};
	/** order by aggregate values of table "mempool_delegation" */
["mempool_delegation_aggregate_order_by"]: GraphQLTypes["mempool_delegation_aggregate_order_by"];
	/** aggregate avg on columns */
["mempool_delegation_avg_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	updated_at?:number
};
	/** order by avg() on columns of table "mempool_delegation" */
["mempool_delegation_avg_order_by"]: GraphQLTypes["mempool_delegation_avg_order_by"];
	/** Boolean expression to filter rows from the table "mempool_delegation". All fields are combined with a logical 'AND'. */
["mempool_delegation_bool_exp"]: GraphQLTypes["mempool_delegation_bool_exp"];
	/** aggregate max on columns */
["mempool_delegation_max_fields"]: {
		branch?:string,
	counter?:string,
	created_at?:ModelTypes["bigint"],
	delegate?:string,
	expiration_level?:ModelTypes["bigint"],
	fee?:string,
	gas_limit?:string,
	hash?:string,
	kind?:string,
	level?:ModelTypes["bigint"],
	network?:string,
	signature?:string,
	status?:string,
	storage_limit?:string,
	updated_at?:ModelTypes["bigint"]
};
	/** order by max() on columns of table "mempool_delegation" */
["mempool_delegation_max_order_by"]: GraphQLTypes["mempool_delegation_max_order_by"];
	/** aggregate min on columns */
["mempool_delegation_min_fields"]: {
		branch?:string,
	counter?:string,
	created_at?:ModelTypes["bigint"],
	delegate?:string,
	expiration_level?:ModelTypes["bigint"],
	fee?:string,
	gas_limit?:string,
	hash?:string,
	kind?:string,
	level?:ModelTypes["bigint"],
	network?:string,
	signature?:string,
	status?:string,
	storage_limit?:string,
	updated_at?:ModelTypes["bigint"]
};
	/** order by min() on columns of table "mempool_delegation" */
["mempool_delegation_min_order_by"]: GraphQLTypes["mempool_delegation_min_order_by"];
	/** ordering options when selecting data from "mempool_delegation" */
["mempool_delegation_order_by"]: GraphQLTypes["mempool_delegation_order_by"];
	/** primary key columns input for table: "mempool_delegation" */
["mempool_delegation_pk_columns_input"]: GraphQLTypes["mempool_delegation_pk_columns_input"];
	/** select columns of table "mempool_delegation" */
["mempool_delegation_select_column"]: GraphQLTypes["mempool_delegation_select_column"];
	/** aggregate stddev on columns */
["mempool_delegation_stddev_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	updated_at?:number
};
	/** order by stddev() on columns of table "mempool_delegation" */
["mempool_delegation_stddev_order_by"]: GraphQLTypes["mempool_delegation_stddev_order_by"];
	/** aggregate stddev_pop on columns */
["mempool_delegation_stddev_pop_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	updated_at?:number
};
	/** order by stddev_pop() on columns of table "mempool_delegation" */
["mempool_delegation_stddev_pop_order_by"]: GraphQLTypes["mempool_delegation_stddev_pop_order_by"];
	/** aggregate stddev_samp on columns */
["mempool_delegation_stddev_samp_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	updated_at?:number
};
	/** order by stddev_samp() on columns of table "mempool_delegation" */
["mempool_delegation_stddev_samp_order_by"]: GraphQLTypes["mempool_delegation_stddev_samp_order_by"];
	/** aggregate sum on columns */
["mempool_delegation_sum_fields"]: {
		created_at?:ModelTypes["bigint"],
	expiration_level?:ModelTypes["bigint"],
	level?:ModelTypes["bigint"],
	updated_at?:ModelTypes["bigint"]
};
	/** order by sum() on columns of table "mempool_delegation" */
["mempool_delegation_sum_order_by"]: GraphQLTypes["mempool_delegation_sum_order_by"];
	/** aggregate var_pop on columns */
["mempool_delegation_var_pop_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	updated_at?:number
};
	/** order by var_pop() on columns of table "mempool_delegation" */
["mempool_delegation_var_pop_order_by"]: GraphQLTypes["mempool_delegation_var_pop_order_by"];
	/** aggregate var_samp on columns */
["mempool_delegation_var_samp_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	updated_at?:number
};
	/** order by var_samp() on columns of table "mempool_delegation" */
["mempool_delegation_var_samp_order_by"]: GraphQLTypes["mempool_delegation_var_samp_order_by"];
	/** aggregate variance on columns */
["mempool_delegation_variance_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	updated_at?:number
};
	/** order by variance() on columns of table "mempool_delegation" */
["mempool_delegation_variance_order_by"]: GraphQLTypes["mempool_delegation_variance_order_by"];
	/** columns and relationships of "mempool_double_baking" */
["mempool_double_baking"]: {
		bh_1_level?:ModelTypes["bigint"],
	bh_1_priority?:ModelTypes["bigint"],
	bh_1_proof_of_work_nonce?:string,
	bh_1_proto?:ModelTypes["bigint"],
	bh_1_validation_pass?:ModelTypes["bigint"],
	bh_2_level?:ModelTypes["bigint"],
	bh_2_priority?:ModelTypes["bigint"],
	bh_2_proof_of_work_nonce?:string,
	bh_2_proto?:ModelTypes["bigint"],
	bh_2_validation_pass?:ModelTypes["bigint"],
	branch?:string,
	created_at?:ModelTypes["bigint"],
	errors?:ModelTypes["jsonb"],
	expiration_level?:ModelTypes["bigint"],
	hash:string,
	kind?:string,
	level?:ModelTypes["bigint"],
	network:string,
	signature?:string,
	status?:string,
	updated_at?:ModelTypes["bigint"]
};
	/** aggregated selection of "mempool_double_baking" */
["mempool_double_baking_aggregate"]: {
		aggregate?:ModelTypes["mempool_double_baking_aggregate_fields"],
	nodes:ModelTypes["mempool_double_baking"][]
};
	/** aggregate fields of "mempool_double_baking" */
["mempool_double_baking_aggregate_fields"]: {
		avg?:ModelTypes["mempool_double_baking_avg_fields"],
	count?:number,
	max?:ModelTypes["mempool_double_baking_max_fields"],
	min?:ModelTypes["mempool_double_baking_min_fields"],
	stddev?:ModelTypes["mempool_double_baking_stddev_fields"],
	stddev_pop?:ModelTypes["mempool_double_baking_stddev_pop_fields"],
	stddev_samp?:ModelTypes["mempool_double_baking_stddev_samp_fields"],
	sum?:ModelTypes["mempool_double_baking_sum_fields"],
	var_pop?:ModelTypes["mempool_double_baking_var_pop_fields"],
	var_samp?:ModelTypes["mempool_double_baking_var_samp_fields"],
	variance?:ModelTypes["mempool_double_baking_variance_fields"]
};
	/** order by aggregate values of table "mempool_double_baking" */
["mempool_double_baking_aggregate_order_by"]: GraphQLTypes["mempool_double_baking_aggregate_order_by"];
	/** aggregate avg on columns */
["mempool_double_baking_avg_fields"]: {
		bh_1_level?:number,
	bh_1_priority?:number,
	bh_1_proto?:number,
	bh_1_validation_pass?:number,
	bh_2_level?:number,
	bh_2_priority?:number,
	bh_2_proto?:number,
	bh_2_validation_pass?:number,
	created_at?:number,
	expiration_level?:number,
	level?:number,
	updated_at?:number
};
	/** order by avg() on columns of table "mempool_double_baking" */
["mempool_double_baking_avg_order_by"]: GraphQLTypes["mempool_double_baking_avg_order_by"];
	/** Boolean expression to filter rows from the table "mempool_double_baking". All fields are combined with a logical 'AND'. */
["mempool_double_baking_bool_exp"]: GraphQLTypes["mempool_double_baking_bool_exp"];
	/** aggregate max on columns */
["mempool_double_baking_max_fields"]: {
		bh_1_level?:ModelTypes["bigint"],
	bh_1_priority?:ModelTypes["bigint"],
	bh_1_proof_of_work_nonce?:string,
	bh_1_proto?:ModelTypes["bigint"],
	bh_1_validation_pass?:ModelTypes["bigint"],
	bh_2_level?:ModelTypes["bigint"],
	bh_2_priority?:ModelTypes["bigint"],
	bh_2_proof_of_work_nonce?:string,
	bh_2_proto?:ModelTypes["bigint"],
	bh_2_validation_pass?:ModelTypes["bigint"],
	branch?:string,
	created_at?:ModelTypes["bigint"],
	expiration_level?:ModelTypes["bigint"],
	hash?:string,
	kind?:string,
	level?:ModelTypes["bigint"],
	network?:string,
	signature?:string,
	status?:string,
	updated_at?:ModelTypes["bigint"]
};
	/** order by max() on columns of table "mempool_double_baking" */
["mempool_double_baking_max_order_by"]: GraphQLTypes["mempool_double_baking_max_order_by"];
	/** aggregate min on columns */
["mempool_double_baking_min_fields"]: {
		bh_1_level?:ModelTypes["bigint"],
	bh_1_priority?:ModelTypes["bigint"],
	bh_1_proof_of_work_nonce?:string,
	bh_1_proto?:ModelTypes["bigint"],
	bh_1_validation_pass?:ModelTypes["bigint"],
	bh_2_level?:ModelTypes["bigint"],
	bh_2_priority?:ModelTypes["bigint"],
	bh_2_proof_of_work_nonce?:string,
	bh_2_proto?:ModelTypes["bigint"],
	bh_2_validation_pass?:ModelTypes["bigint"],
	branch?:string,
	created_at?:ModelTypes["bigint"],
	expiration_level?:ModelTypes["bigint"],
	hash?:string,
	kind?:string,
	level?:ModelTypes["bigint"],
	network?:string,
	signature?:string,
	status?:string,
	updated_at?:ModelTypes["bigint"]
};
	/** order by min() on columns of table "mempool_double_baking" */
["mempool_double_baking_min_order_by"]: GraphQLTypes["mempool_double_baking_min_order_by"];
	/** ordering options when selecting data from "mempool_double_baking" */
["mempool_double_baking_order_by"]: GraphQLTypes["mempool_double_baking_order_by"];
	/** primary key columns input for table: "mempool_double_baking" */
["mempool_double_baking_pk_columns_input"]: GraphQLTypes["mempool_double_baking_pk_columns_input"];
	/** select columns of table "mempool_double_baking" */
["mempool_double_baking_select_column"]: GraphQLTypes["mempool_double_baking_select_column"];
	/** aggregate stddev on columns */
["mempool_double_baking_stddev_fields"]: {
		bh_1_level?:number,
	bh_1_priority?:number,
	bh_1_proto?:number,
	bh_1_validation_pass?:number,
	bh_2_level?:number,
	bh_2_priority?:number,
	bh_2_proto?:number,
	bh_2_validation_pass?:number,
	created_at?:number,
	expiration_level?:number,
	level?:number,
	updated_at?:number
};
	/** order by stddev() on columns of table "mempool_double_baking" */
["mempool_double_baking_stddev_order_by"]: GraphQLTypes["mempool_double_baking_stddev_order_by"];
	/** aggregate stddev_pop on columns */
["mempool_double_baking_stddev_pop_fields"]: {
		bh_1_level?:number,
	bh_1_priority?:number,
	bh_1_proto?:number,
	bh_1_validation_pass?:number,
	bh_2_level?:number,
	bh_2_priority?:number,
	bh_2_proto?:number,
	bh_2_validation_pass?:number,
	created_at?:number,
	expiration_level?:number,
	level?:number,
	updated_at?:number
};
	/** order by stddev_pop() on columns of table "mempool_double_baking" */
["mempool_double_baking_stddev_pop_order_by"]: GraphQLTypes["mempool_double_baking_stddev_pop_order_by"];
	/** aggregate stddev_samp on columns */
["mempool_double_baking_stddev_samp_fields"]: {
		bh_1_level?:number,
	bh_1_priority?:number,
	bh_1_proto?:number,
	bh_1_validation_pass?:number,
	bh_2_level?:number,
	bh_2_priority?:number,
	bh_2_proto?:number,
	bh_2_validation_pass?:number,
	created_at?:number,
	expiration_level?:number,
	level?:number,
	updated_at?:number
};
	/** order by stddev_samp() on columns of table "mempool_double_baking" */
["mempool_double_baking_stddev_samp_order_by"]: GraphQLTypes["mempool_double_baking_stddev_samp_order_by"];
	/** aggregate sum on columns */
["mempool_double_baking_sum_fields"]: {
		bh_1_level?:ModelTypes["bigint"],
	bh_1_priority?:ModelTypes["bigint"],
	bh_1_proto?:ModelTypes["bigint"],
	bh_1_validation_pass?:ModelTypes["bigint"],
	bh_2_level?:ModelTypes["bigint"],
	bh_2_priority?:ModelTypes["bigint"],
	bh_2_proto?:ModelTypes["bigint"],
	bh_2_validation_pass?:ModelTypes["bigint"],
	created_at?:ModelTypes["bigint"],
	expiration_level?:ModelTypes["bigint"],
	level?:ModelTypes["bigint"],
	updated_at?:ModelTypes["bigint"]
};
	/** order by sum() on columns of table "mempool_double_baking" */
["mempool_double_baking_sum_order_by"]: GraphQLTypes["mempool_double_baking_sum_order_by"];
	/** aggregate var_pop on columns */
["mempool_double_baking_var_pop_fields"]: {
		bh_1_level?:number,
	bh_1_priority?:number,
	bh_1_proto?:number,
	bh_1_validation_pass?:number,
	bh_2_level?:number,
	bh_2_priority?:number,
	bh_2_proto?:number,
	bh_2_validation_pass?:number,
	created_at?:number,
	expiration_level?:number,
	level?:number,
	updated_at?:number
};
	/** order by var_pop() on columns of table "mempool_double_baking" */
["mempool_double_baking_var_pop_order_by"]: GraphQLTypes["mempool_double_baking_var_pop_order_by"];
	/** aggregate var_samp on columns */
["mempool_double_baking_var_samp_fields"]: {
		bh_1_level?:number,
	bh_1_priority?:number,
	bh_1_proto?:number,
	bh_1_validation_pass?:number,
	bh_2_level?:number,
	bh_2_priority?:number,
	bh_2_proto?:number,
	bh_2_validation_pass?:number,
	created_at?:number,
	expiration_level?:number,
	level?:number,
	updated_at?:number
};
	/** order by var_samp() on columns of table "mempool_double_baking" */
["mempool_double_baking_var_samp_order_by"]: GraphQLTypes["mempool_double_baking_var_samp_order_by"];
	/** aggregate variance on columns */
["mempool_double_baking_variance_fields"]: {
		bh_1_level?:number,
	bh_1_priority?:number,
	bh_1_proto?:number,
	bh_1_validation_pass?:number,
	bh_2_level?:number,
	bh_2_priority?:number,
	bh_2_proto?:number,
	bh_2_validation_pass?:number,
	created_at?:number,
	expiration_level?:number,
	level?:number,
	updated_at?:number
};
	/** order by variance() on columns of table "mempool_double_baking" */
["mempool_double_baking_variance_order_by"]: GraphQLTypes["mempool_double_baking_variance_order_by"];
	/** columns and relationships of "mempool_double_endorsing" */
["mempool_double_endorsing"]: {
		branch?:string,
	created_at?:ModelTypes["bigint"],
	errors?:ModelTypes["jsonb"],
	expiration_level?:ModelTypes["bigint"],
	hash:string,
	kind?:string,
	level?:ModelTypes["bigint"],
	network:string,
	op_1_kind?:string,
	op_1_level?:ModelTypes["bigint"],
	op_2_kind?:string,
	op_2_level?:ModelTypes["bigint"],
	signature?:string,
	status?:string,
	updated_at?:ModelTypes["bigint"]
};
	/** aggregated selection of "mempool_double_endorsing" */
["mempool_double_endorsing_aggregate"]: {
		aggregate?:ModelTypes["mempool_double_endorsing_aggregate_fields"],
	nodes:ModelTypes["mempool_double_endorsing"][]
};
	/** aggregate fields of "mempool_double_endorsing" */
["mempool_double_endorsing_aggregate_fields"]: {
		avg?:ModelTypes["mempool_double_endorsing_avg_fields"],
	count?:number,
	max?:ModelTypes["mempool_double_endorsing_max_fields"],
	min?:ModelTypes["mempool_double_endorsing_min_fields"],
	stddev?:ModelTypes["mempool_double_endorsing_stddev_fields"],
	stddev_pop?:ModelTypes["mempool_double_endorsing_stddev_pop_fields"],
	stddev_samp?:ModelTypes["mempool_double_endorsing_stddev_samp_fields"],
	sum?:ModelTypes["mempool_double_endorsing_sum_fields"],
	var_pop?:ModelTypes["mempool_double_endorsing_var_pop_fields"],
	var_samp?:ModelTypes["mempool_double_endorsing_var_samp_fields"],
	variance?:ModelTypes["mempool_double_endorsing_variance_fields"]
};
	/** order by aggregate values of table "mempool_double_endorsing" */
["mempool_double_endorsing_aggregate_order_by"]: GraphQLTypes["mempool_double_endorsing_aggregate_order_by"];
	/** aggregate avg on columns */
["mempool_double_endorsing_avg_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	op_1_level?:number,
	op_2_level?:number,
	updated_at?:number
};
	/** order by avg() on columns of table "mempool_double_endorsing" */
["mempool_double_endorsing_avg_order_by"]: GraphQLTypes["mempool_double_endorsing_avg_order_by"];
	/** Boolean expression to filter rows from the table "mempool_double_endorsing". All fields are combined with a logical 'AND'. */
["mempool_double_endorsing_bool_exp"]: GraphQLTypes["mempool_double_endorsing_bool_exp"];
	/** aggregate max on columns */
["mempool_double_endorsing_max_fields"]: {
		branch?:string,
	created_at?:ModelTypes["bigint"],
	expiration_level?:ModelTypes["bigint"],
	hash?:string,
	kind?:string,
	level?:ModelTypes["bigint"],
	network?:string,
	op_1_kind?:string,
	op_1_level?:ModelTypes["bigint"],
	op_2_kind?:string,
	op_2_level?:ModelTypes["bigint"],
	signature?:string,
	status?:string,
	updated_at?:ModelTypes["bigint"]
};
	/** order by max() on columns of table "mempool_double_endorsing" */
["mempool_double_endorsing_max_order_by"]: GraphQLTypes["mempool_double_endorsing_max_order_by"];
	/** aggregate min on columns */
["mempool_double_endorsing_min_fields"]: {
		branch?:string,
	created_at?:ModelTypes["bigint"],
	expiration_level?:ModelTypes["bigint"],
	hash?:string,
	kind?:string,
	level?:ModelTypes["bigint"],
	network?:string,
	op_1_kind?:string,
	op_1_level?:ModelTypes["bigint"],
	op_2_kind?:string,
	op_2_level?:ModelTypes["bigint"],
	signature?:string,
	status?:string,
	updated_at?:ModelTypes["bigint"]
};
	/** order by min() on columns of table "mempool_double_endorsing" */
["mempool_double_endorsing_min_order_by"]: GraphQLTypes["mempool_double_endorsing_min_order_by"];
	/** ordering options when selecting data from "mempool_double_endorsing" */
["mempool_double_endorsing_order_by"]: GraphQLTypes["mempool_double_endorsing_order_by"];
	/** primary key columns input for table: "mempool_double_endorsing" */
["mempool_double_endorsing_pk_columns_input"]: GraphQLTypes["mempool_double_endorsing_pk_columns_input"];
	/** select columns of table "mempool_double_endorsing" */
["mempool_double_endorsing_select_column"]: GraphQLTypes["mempool_double_endorsing_select_column"];
	/** aggregate stddev on columns */
["mempool_double_endorsing_stddev_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	op_1_level?:number,
	op_2_level?:number,
	updated_at?:number
};
	/** order by stddev() on columns of table "mempool_double_endorsing" */
["mempool_double_endorsing_stddev_order_by"]: GraphQLTypes["mempool_double_endorsing_stddev_order_by"];
	/** aggregate stddev_pop on columns */
["mempool_double_endorsing_stddev_pop_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	op_1_level?:number,
	op_2_level?:number,
	updated_at?:number
};
	/** order by stddev_pop() on columns of table "mempool_double_endorsing" */
["mempool_double_endorsing_stddev_pop_order_by"]: GraphQLTypes["mempool_double_endorsing_stddev_pop_order_by"];
	/** aggregate stddev_samp on columns */
["mempool_double_endorsing_stddev_samp_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	op_1_level?:number,
	op_2_level?:number,
	updated_at?:number
};
	/** order by stddev_samp() on columns of table "mempool_double_endorsing" */
["mempool_double_endorsing_stddev_samp_order_by"]: GraphQLTypes["mempool_double_endorsing_stddev_samp_order_by"];
	/** aggregate sum on columns */
["mempool_double_endorsing_sum_fields"]: {
		created_at?:ModelTypes["bigint"],
	expiration_level?:ModelTypes["bigint"],
	level?:ModelTypes["bigint"],
	op_1_level?:ModelTypes["bigint"],
	op_2_level?:ModelTypes["bigint"],
	updated_at?:ModelTypes["bigint"]
};
	/** order by sum() on columns of table "mempool_double_endorsing" */
["mempool_double_endorsing_sum_order_by"]: GraphQLTypes["mempool_double_endorsing_sum_order_by"];
	/** aggregate var_pop on columns */
["mempool_double_endorsing_var_pop_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	op_1_level?:number,
	op_2_level?:number,
	updated_at?:number
};
	/** order by var_pop() on columns of table "mempool_double_endorsing" */
["mempool_double_endorsing_var_pop_order_by"]: GraphQLTypes["mempool_double_endorsing_var_pop_order_by"];
	/** aggregate var_samp on columns */
["mempool_double_endorsing_var_samp_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	op_1_level?:number,
	op_2_level?:number,
	updated_at?:number
};
	/** order by var_samp() on columns of table "mempool_double_endorsing" */
["mempool_double_endorsing_var_samp_order_by"]: GraphQLTypes["mempool_double_endorsing_var_samp_order_by"];
	/** aggregate variance on columns */
["mempool_double_endorsing_variance_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	op_1_level?:number,
	op_2_level?:number,
	updated_at?:number
};
	/** order by variance() on columns of table "mempool_double_endorsing" */
["mempool_double_endorsing_variance_order_by"]: GraphQLTypes["mempool_double_endorsing_variance_order_by"];
	/** columns and relationships of "mempool_endorsement" */
["mempool_endorsement"]: {
		baker?:string,
	branch?:string,
	created_at?:ModelTypes["bigint"],
	errors?:ModelTypes["jsonb"],
	expiration_level?:ModelTypes["bigint"],
	hash:string,
	kind?:string,
	level?:ModelTypes["bigint"],
	network:string,
	signature?:string,
	status?:string,
	updated_at?:ModelTypes["bigint"]
};
	/** aggregated selection of "mempool_endorsement" */
["mempool_endorsement_aggregate"]: {
		aggregate?:ModelTypes["mempool_endorsement_aggregate_fields"],
	nodes:ModelTypes["mempool_endorsement"][]
};
	/** aggregate fields of "mempool_endorsement" */
["mempool_endorsement_aggregate_fields"]: {
		avg?:ModelTypes["mempool_endorsement_avg_fields"],
	count?:number,
	max?:ModelTypes["mempool_endorsement_max_fields"],
	min?:ModelTypes["mempool_endorsement_min_fields"],
	stddev?:ModelTypes["mempool_endorsement_stddev_fields"],
	stddev_pop?:ModelTypes["mempool_endorsement_stddev_pop_fields"],
	stddev_samp?:ModelTypes["mempool_endorsement_stddev_samp_fields"],
	sum?:ModelTypes["mempool_endorsement_sum_fields"],
	var_pop?:ModelTypes["mempool_endorsement_var_pop_fields"],
	var_samp?:ModelTypes["mempool_endorsement_var_samp_fields"],
	variance?:ModelTypes["mempool_endorsement_variance_fields"]
};
	/** order by aggregate values of table "mempool_endorsement" */
["mempool_endorsement_aggregate_order_by"]: GraphQLTypes["mempool_endorsement_aggregate_order_by"];
	/** aggregate avg on columns */
["mempool_endorsement_avg_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	updated_at?:number
};
	/** order by avg() on columns of table "mempool_endorsement" */
["mempool_endorsement_avg_order_by"]: GraphQLTypes["mempool_endorsement_avg_order_by"];
	/** Boolean expression to filter rows from the table "mempool_endorsement". All fields are combined with a logical 'AND'. */
["mempool_endorsement_bool_exp"]: GraphQLTypes["mempool_endorsement_bool_exp"];
	/** aggregate max on columns */
["mempool_endorsement_max_fields"]: {
		baker?:string,
	branch?:string,
	created_at?:ModelTypes["bigint"],
	expiration_level?:ModelTypes["bigint"],
	hash?:string,
	kind?:string,
	level?:ModelTypes["bigint"],
	network?:string,
	signature?:string,
	status?:string,
	updated_at?:ModelTypes["bigint"]
};
	/** order by max() on columns of table "mempool_endorsement" */
["mempool_endorsement_max_order_by"]: GraphQLTypes["mempool_endorsement_max_order_by"];
	/** aggregate min on columns */
["mempool_endorsement_min_fields"]: {
		baker?:string,
	branch?:string,
	created_at?:ModelTypes["bigint"],
	expiration_level?:ModelTypes["bigint"],
	hash?:string,
	kind?:string,
	level?:ModelTypes["bigint"],
	network?:string,
	signature?:string,
	status?:string,
	updated_at?:ModelTypes["bigint"]
};
	/** order by min() on columns of table "mempool_endorsement" */
["mempool_endorsement_min_order_by"]: GraphQLTypes["mempool_endorsement_min_order_by"];
	/** ordering options when selecting data from "mempool_endorsement" */
["mempool_endorsement_order_by"]: GraphQLTypes["mempool_endorsement_order_by"];
	/** primary key columns input for table: "mempool_endorsement" */
["mempool_endorsement_pk_columns_input"]: GraphQLTypes["mempool_endorsement_pk_columns_input"];
	/** select columns of table "mempool_endorsement" */
["mempool_endorsement_select_column"]: GraphQLTypes["mempool_endorsement_select_column"];
	/** aggregate stddev on columns */
["mempool_endorsement_stddev_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	updated_at?:number
};
	/** order by stddev() on columns of table "mempool_endorsement" */
["mempool_endorsement_stddev_order_by"]: GraphQLTypes["mempool_endorsement_stddev_order_by"];
	/** aggregate stddev_pop on columns */
["mempool_endorsement_stddev_pop_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	updated_at?:number
};
	/** order by stddev_pop() on columns of table "mempool_endorsement" */
["mempool_endorsement_stddev_pop_order_by"]: GraphQLTypes["mempool_endorsement_stddev_pop_order_by"];
	/** aggregate stddev_samp on columns */
["mempool_endorsement_stddev_samp_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	updated_at?:number
};
	/** order by stddev_samp() on columns of table "mempool_endorsement" */
["mempool_endorsement_stddev_samp_order_by"]: GraphQLTypes["mempool_endorsement_stddev_samp_order_by"];
	/** aggregate sum on columns */
["mempool_endorsement_sum_fields"]: {
		created_at?:ModelTypes["bigint"],
	expiration_level?:ModelTypes["bigint"],
	level?:ModelTypes["bigint"],
	updated_at?:ModelTypes["bigint"]
};
	/** order by sum() on columns of table "mempool_endorsement" */
["mempool_endorsement_sum_order_by"]: GraphQLTypes["mempool_endorsement_sum_order_by"];
	/** aggregate var_pop on columns */
["mempool_endorsement_var_pop_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	updated_at?:number
};
	/** order by var_pop() on columns of table "mempool_endorsement" */
["mempool_endorsement_var_pop_order_by"]: GraphQLTypes["mempool_endorsement_var_pop_order_by"];
	/** aggregate var_samp on columns */
["mempool_endorsement_var_samp_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	updated_at?:number
};
	/** order by var_samp() on columns of table "mempool_endorsement" */
["mempool_endorsement_var_samp_order_by"]: GraphQLTypes["mempool_endorsement_var_samp_order_by"];
	/** aggregate variance on columns */
["mempool_endorsement_variance_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	updated_at?:number
};
	/** order by variance() on columns of table "mempool_endorsement" */
["mempool_endorsement_variance_order_by"]: GraphQLTypes["mempool_endorsement_variance_order_by"];
	/** columns and relationships of "mempool_nonce_revelation" */
["mempool_nonce_revelation"]: {
		branch?:string,
	created_at?:ModelTypes["bigint"],
	errors?:ModelTypes["jsonb"],
	expiration_level?:ModelTypes["bigint"],
	hash:string,
	kind?:string,
	level?:ModelTypes["bigint"],
	network:string,
	nonce?:string,
	signature?:string,
	status?:string,
	updated_at?:ModelTypes["bigint"]
};
	/** aggregated selection of "mempool_nonce_revelation" */
["mempool_nonce_revelation_aggregate"]: {
		aggregate?:ModelTypes["mempool_nonce_revelation_aggregate_fields"],
	nodes:ModelTypes["mempool_nonce_revelation"][]
};
	/** aggregate fields of "mempool_nonce_revelation" */
["mempool_nonce_revelation_aggregate_fields"]: {
		avg?:ModelTypes["mempool_nonce_revelation_avg_fields"],
	count?:number,
	max?:ModelTypes["mempool_nonce_revelation_max_fields"],
	min?:ModelTypes["mempool_nonce_revelation_min_fields"],
	stddev?:ModelTypes["mempool_nonce_revelation_stddev_fields"],
	stddev_pop?:ModelTypes["mempool_nonce_revelation_stddev_pop_fields"],
	stddev_samp?:ModelTypes["mempool_nonce_revelation_stddev_samp_fields"],
	sum?:ModelTypes["mempool_nonce_revelation_sum_fields"],
	var_pop?:ModelTypes["mempool_nonce_revelation_var_pop_fields"],
	var_samp?:ModelTypes["mempool_nonce_revelation_var_samp_fields"],
	variance?:ModelTypes["mempool_nonce_revelation_variance_fields"]
};
	/** order by aggregate values of table "mempool_nonce_revelation" */
["mempool_nonce_revelation_aggregate_order_by"]: GraphQLTypes["mempool_nonce_revelation_aggregate_order_by"];
	/** aggregate avg on columns */
["mempool_nonce_revelation_avg_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	updated_at?:number
};
	/** order by avg() on columns of table "mempool_nonce_revelation" */
["mempool_nonce_revelation_avg_order_by"]: GraphQLTypes["mempool_nonce_revelation_avg_order_by"];
	/** Boolean expression to filter rows from the table "mempool_nonce_revelation". All fields are combined with a logical 'AND'. */
["mempool_nonce_revelation_bool_exp"]: GraphQLTypes["mempool_nonce_revelation_bool_exp"];
	/** aggregate max on columns */
["mempool_nonce_revelation_max_fields"]: {
		branch?:string,
	created_at?:ModelTypes["bigint"],
	expiration_level?:ModelTypes["bigint"],
	hash?:string,
	kind?:string,
	level?:ModelTypes["bigint"],
	network?:string,
	nonce?:string,
	signature?:string,
	status?:string,
	updated_at?:ModelTypes["bigint"]
};
	/** order by max() on columns of table "mempool_nonce_revelation" */
["mempool_nonce_revelation_max_order_by"]: GraphQLTypes["mempool_nonce_revelation_max_order_by"];
	/** aggregate min on columns */
["mempool_nonce_revelation_min_fields"]: {
		branch?:string,
	created_at?:ModelTypes["bigint"],
	expiration_level?:ModelTypes["bigint"],
	hash?:string,
	kind?:string,
	level?:ModelTypes["bigint"],
	network?:string,
	nonce?:string,
	signature?:string,
	status?:string,
	updated_at?:ModelTypes["bigint"]
};
	/** order by min() on columns of table "mempool_nonce_revelation" */
["mempool_nonce_revelation_min_order_by"]: GraphQLTypes["mempool_nonce_revelation_min_order_by"];
	/** ordering options when selecting data from "mempool_nonce_revelation" */
["mempool_nonce_revelation_order_by"]: GraphQLTypes["mempool_nonce_revelation_order_by"];
	/** primary key columns input for table: "mempool_nonce_revelation" */
["mempool_nonce_revelation_pk_columns_input"]: GraphQLTypes["mempool_nonce_revelation_pk_columns_input"];
	/** select columns of table "mempool_nonce_revelation" */
["mempool_nonce_revelation_select_column"]: GraphQLTypes["mempool_nonce_revelation_select_column"];
	/** aggregate stddev on columns */
["mempool_nonce_revelation_stddev_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	updated_at?:number
};
	/** order by stddev() on columns of table "mempool_nonce_revelation" */
["mempool_nonce_revelation_stddev_order_by"]: GraphQLTypes["mempool_nonce_revelation_stddev_order_by"];
	/** aggregate stddev_pop on columns */
["mempool_nonce_revelation_stddev_pop_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	updated_at?:number
};
	/** order by stddev_pop() on columns of table "mempool_nonce_revelation" */
["mempool_nonce_revelation_stddev_pop_order_by"]: GraphQLTypes["mempool_nonce_revelation_stddev_pop_order_by"];
	/** aggregate stddev_samp on columns */
["mempool_nonce_revelation_stddev_samp_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	updated_at?:number
};
	/** order by stddev_samp() on columns of table "mempool_nonce_revelation" */
["mempool_nonce_revelation_stddev_samp_order_by"]: GraphQLTypes["mempool_nonce_revelation_stddev_samp_order_by"];
	/** aggregate sum on columns */
["mempool_nonce_revelation_sum_fields"]: {
		created_at?:ModelTypes["bigint"],
	expiration_level?:ModelTypes["bigint"],
	level?:ModelTypes["bigint"],
	updated_at?:ModelTypes["bigint"]
};
	/** order by sum() on columns of table "mempool_nonce_revelation" */
["mempool_nonce_revelation_sum_order_by"]: GraphQLTypes["mempool_nonce_revelation_sum_order_by"];
	/** aggregate var_pop on columns */
["mempool_nonce_revelation_var_pop_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	updated_at?:number
};
	/** order by var_pop() on columns of table "mempool_nonce_revelation" */
["mempool_nonce_revelation_var_pop_order_by"]: GraphQLTypes["mempool_nonce_revelation_var_pop_order_by"];
	/** aggregate var_samp on columns */
["mempool_nonce_revelation_var_samp_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	updated_at?:number
};
	/** order by var_samp() on columns of table "mempool_nonce_revelation" */
["mempool_nonce_revelation_var_samp_order_by"]: GraphQLTypes["mempool_nonce_revelation_var_samp_order_by"];
	/** aggregate variance on columns */
["mempool_nonce_revelation_variance_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	updated_at?:number
};
	/** order by variance() on columns of table "mempool_nonce_revelation" */
["mempool_nonce_revelation_variance_order_by"]: GraphQLTypes["mempool_nonce_revelation_variance_order_by"];
	/** columns and relationships of "mempool_origination" */
["mempool_origination"]: {
		balance?:string,
	branch?:string,
	counter:string,
	created_at?:ModelTypes["bigint"],
	delegate?:string,
	errors?:ModelTypes["jsonb"],
	expiration_level?:ModelTypes["bigint"],
	fee?:string,
	gas_limit?:string,
	hash:string,
	kind?:string,
	level?:ModelTypes["bigint"],
	network:string,
	signature?:string,
	status?:string,
	storage?:ModelTypes["jsonb"],
	storage_limit?:string,
	updated_at?:ModelTypes["bigint"]
};
	/** aggregated selection of "mempool_origination" */
["mempool_origination_aggregate"]: {
		aggregate?:ModelTypes["mempool_origination_aggregate_fields"],
	nodes:ModelTypes["mempool_origination"][]
};
	/** aggregate fields of "mempool_origination" */
["mempool_origination_aggregate_fields"]: {
		avg?:ModelTypes["mempool_origination_avg_fields"],
	count?:number,
	max?:ModelTypes["mempool_origination_max_fields"],
	min?:ModelTypes["mempool_origination_min_fields"],
	stddev?:ModelTypes["mempool_origination_stddev_fields"],
	stddev_pop?:ModelTypes["mempool_origination_stddev_pop_fields"],
	stddev_samp?:ModelTypes["mempool_origination_stddev_samp_fields"],
	sum?:ModelTypes["mempool_origination_sum_fields"],
	var_pop?:ModelTypes["mempool_origination_var_pop_fields"],
	var_samp?:ModelTypes["mempool_origination_var_samp_fields"],
	variance?:ModelTypes["mempool_origination_variance_fields"]
};
	/** order by aggregate values of table "mempool_origination" */
["mempool_origination_aggregate_order_by"]: GraphQLTypes["mempool_origination_aggregate_order_by"];
	/** aggregate avg on columns */
["mempool_origination_avg_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	updated_at?:number
};
	/** order by avg() on columns of table "mempool_origination" */
["mempool_origination_avg_order_by"]: GraphQLTypes["mempool_origination_avg_order_by"];
	/** Boolean expression to filter rows from the table "mempool_origination". All fields are combined with a logical 'AND'. */
["mempool_origination_bool_exp"]: GraphQLTypes["mempool_origination_bool_exp"];
	/** aggregate max on columns */
["mempool_origination_max_fields"]: {
		balance?:string,
	branch?:string,
	counter?:string,
	created_at?:ModelTypes["bigint"],
	delegate?:string,
	expiration_level?:ModelTypes["bigint"],
	fee?:string,
	gas_limit?:string,
	hash?:string,
	kind?:string,
	level?:ModelTypes["bigint"],
	network?:string,
	signature?:string,
	status?:string,
	storage_limit?:string,
	updated_at?:ModelTypes["bigint"]
};
	/** order by max() on columns of table "mempool_origination" */
["mempool_origination_max_order_by"]: GraphQLTypes["mempool_origination_max_order_by"];
	/** aggregate min on columns */
["mempool_origination_min_fields"]: {
		balance?:string,
	branch?:string,
	counter?:string,
	created_at?:ModelTypes["bigint"],
	delegate?:string,
	expiration_level?:ModelTypes["bigint"],
	fee?:string,
	gas_limit?:string,
	hash?:string,
	kind?:string,
	level?:ModelTypes["bigint"],
	network?:string,
	signature?:string,
	status?:string,
	storage_limit?:string,
	updated_at?:ModelTypes["bigint"]
};
	/** order by min() on columns of table "mempool_origination" */
["mempool_origination_min_order_by"]: GraphQLTypes["mempool_origination_min_order_by"];
	/** ordering options when selecting data from "mempool_origination" */
["mempool_origination_order_by"]: GraphQLTypes["mempool_origination_order_by"];
	/** primary key columns input for table: "mempool_origination" */
["mempool_origination_pk_columns_input"]: GraphQLTypes["mempool_origination_pk_columns_input"];
	/** select columns of table "mempool_origination" */
["mempool_origination_select_column"]: GraphQLTypes["mempool_origination_select_column"];
	/** aggregate stddev on columns */
["mempool_origination_stddev_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	updated_at?:number
};
	/** order by stddev() on columns of table "mempool_origination" */
["mempool_origination_stddev_order_by"]: GraphQLTypes["mempool_origination_stddev_order_by"];
	/** aggregate stddev_pop on columns */
["mempool_origination_stddev_pop_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	updated_at?:number
};
	/** order by stddev_pop() on columns of table "mempool_origination" */
["mempool_origination_stddev_pop_order_by"]: GraphQLTypes["mempool_origination_stddev_pop_order_by"];
	/** aggregate stddev_samp on columns */
["mempool_origination_stddev_samp_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	updated_at?:number
};
	/** order by stddev_samp() on columns of table "mempool_origination" */
["mempool_origination_stddev_samp_order_by"]: GraphQLTypes["mempool_origination_stddev_samp_order_by"];
	/** aggregate sum on columns */
["mempool_origination_sum_fields"]: {
		created_at?:ModelTypes["bigint"],
	expiration_level?:ModelTypes["bigint"],
	level?:ModelTypes["bigint"],
	updated_at?:ModelTypes["bigint"]
};
	/** order by sum() on columns of table "mempool_origination" */
["mempool_origination_sum_order_by"]: GraphQLTypes["mempool_origination_sum_order_by"];
	/** aggregate var_pop on columns */
["mempool_origination_var_pop_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	updated_at?:number
};
	/** order by var_pop() on columns of table "mempool_origination" */
["mempool_origination_var_pop_order_by"]: GraphQLTypes["mempool_origination_var_pop_order_by"];
	/** aggregate var_samp on columns */
["mempool_origination_var_samp_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	updated_at?:number
};
	/** order by var_samp() on columns of table "mempool_origination" */
["mempool_origination_var_samp_order_by"]: GraphQLTypes["mempool_origination_var_samp_order_by"];
	/** aggregate variance on columns */
["mempool_origination_variance_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	updated_at?:number
};
	/** order by variance() on columns of table "mempool_origination" */
["mempool_origination_variance_order_by"]: GraphQLTypes["mempool_origination_variance_order_by"];
	/** columns and relationships of "mempool_proposal" */
["mempool_proposal"]: {
		branch?:string,
	created_at?:ModelTypes["bigint"],
	errors?:ModelTypes["jsonb"],
	expiration_level?:ModelTypes["bigint"],
	hash:string,
	kind?:string,
	level?:ModelTypes["bigint"],
	network:string,
	period?:ModelTypes["bigint"],
	proposals?:string,
	signature?:string,
	status?:string,
	updated_at?:ModelTypes["bigint"]
};
	/** aggregated selection of "mempool_proposal" */
["mempool_proposal_aggregate"]: {
		aggregate?:ModelTypes["mempool_proposal_aggregate_fields"],
	nodes:ModelTypes["mempool_proposal"][]
};
	/** aggregate fields of "mempool_proposal" */
["mempool_proposal_aggregate_fields"]: {
		avg?:ModelTypes["mempool_proposal_avg_fields"],
	count?:number,
	max?:ModelTypes["mempool_proposal_max_fields"],
	min?:ModelTypes["mempool_proposal_min_fields"],
	stddev?:ModelTypes["mempool_proposal_stddev_fields"],
	stddev_pop?:ModelTypes["mempool_proposal_stddev_pop_fields"],
	stddev_samp?:ModelTypes["mempool_proposal_stddev_samp_fields"],
	sum?:ModelTypes["mempool_proposal_sum_fields"],
	var_pop?:ModelTypes["mempool_proposal_var_pop_fields"],
	var_samp?:ModelTypes["mempool_proposal_var_samp_fields"],
	variance?:ModelTypes["mempool_proposal_variance_fields"]
};
	/** order by aggregate values of table "mempool_proposal" */
["mempool_proposal_aggregate_order_by"]: GraphQLTypes["mempool_proposal_aggregate_order_by"];
	/** aggregate avg on columns */
["mempool_proposal_avg_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	period?:number,
	updated_at?:number
};
	/** order by avg() on columns of table "mempool_proposal" */
["mempool_proposal_avg_order_by"]: GraphQLTypes["mempool_proposal_avg_order_by"];
	/** Boolean expression to filter rows from the table "mempool_proposal". All fields are combined with a logical 'AND'. */
["mempool_proposal_bool_exp"]: GraphQLTypes["mempool_proposal_bool_exp"];
	/** aggregate max on columns */
["mempool_proposal_max_fields"]: {
		branch?:string,
	created_at?:ModelTypes["bigint"],
	expiration_level?:ModelTypes["bigint"],
	hash?:string,
	kind?:string,
	level?:ModelTypes["bigint"],
	network?:string,
	period?:ModelTypes["bigint"],
	proposals?:string,
	signature?:string,
	status?:string,
	updated_at?:ModelTypes["bigint"]
};
	/** order by max() on columns of table "mempool_proposal" */
["mempool_proposal_max_order_by"]: GraphQLTypes["mempool_proposal_max_order_by"];
	/** aggregate min on columns */
["mempool_proposal_min_fields"]: {
		branch?:string,
	created_at?:ModelTypes["bigint"],
	expiration_level?:ModelTypes["bigint"],
	hash?:string,
	kind?:string,
	level?:ModelTypes["bigint"],
	network?:string,
	period?:ModelTypes["bigint"],
	proposals?:string,
	signature?:string,
	status?:string,
	updated_at?:ModelTypes["bigint"]
};
	/** order by min() on columns of table "mempool_proposal" */
["mempool_proposal_min_order_by"]: GraphQLTypes["mempool_proposal_min_order_by"];
	/** ordering options when selecting data from "mempool_proposal" */
["mempool_proposal_order_by"]: GraphQLTypes["mempool_proposal_order_by"];
	/** primary key columns input for table: "mempool_proposal" */
["mempool_proposal_pk_columns_input"]: GraphQLTypes["mempool_proposal_pk_columns_input"];
	/** select columns of table "mempool_proposal" */
["mempool_proposal_select_column"]: GraphQLTypes["mempool_proposal_select_column"];
	/** aggregate stddev on columns */
["mempool_proposal_stddev_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	period?:number,
	updated_at?:number
};
	/** order by stddev() on columns of table "mempool_proposal" */
["mempool_proposal_stddev_order_by"]: GraphQLTypes["mempool_proposal_stddev_order_by"];
	/** aggregate stddev_pop on columns */
["mempool_proposal_stddev_pop_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	period?:number,
	updated_at?:number
};
	/** order by stddev_pop() on columns of table "mempool_proposal" */
["mempool_proposal_stddev_pop_order_by"]: GraphQLTypes["mempool_proposal_stddev_pop_order_by"];
	/** aggregate stddev_samp on columns */
["mempool_proposal_stddev_samp_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	period?:number,
	updated_at?:number
};
	/** order by stddev_samp() on columns of table "mempool_proposal" */
["mempool_proposal_stddev_samp_order_by"]: GraphQLTypes["mempool_proposal_stddev_samp_order_by"];
	/** aggregate sum on columns */
["mempool_proposal_sum_fields"]: {
		created_at?:ModelTypes["bigint"],
	expiration_level?:ModelTypes["bigint"],
	level?:ModelTypes["bigint"],
	period?:ModelTypes["bigint"],
	updated_at?:ModelTypes["bigint"]
};
	/** order by sum() on columns of table "mempool_proposal" */
["mempool_proposal_sum_order_by"]: GraphQLTypes["mempool_proposal_sum_order_by"];
	/** aggregate var_pop on columns */
["mempool_proposal_var_pop_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	period?:number,
	updated_at?:number
};
	/** order by var_pop() on columns of table "mempool_proposal" */
["mempool_proposal_var_pop_order_by"]: GraphQLTypes["mempool_proposal_var_pop_order_by"];
	/** aggregate var_samp on columns */
["mempool_proposal_var_samp_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	period?:number,
	updated_at?:number
};
	/** order by var_samp() on columns of table "mempool_proposal" */
["mempool_proposal_var_samp_order_by"]: GraphQLTypes["mempool_proposal_var_samp_order_by"];
	/** aggregate variance on columns */
["mempool_proposal_variance_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	period?:number,
	updated_at?:number
};
	/** order by variance() on columns of table "mempool_proposal" */
["mempool_proposal_variance_order_by"]: GraphQLTypes["mempool_proposal_variance_order_by"];
	/** columns and relationships of "mempool_reveal" */
["mempool_reveal"]: {
		branch?:string,
	counter:string,
	created_at?:ModelTypes["bigint"],
	errors?:ModelTypes["jsonb"],
	expiration_level?:ModelTypes["bigint"],
	fee?:string,
	gas_limit?:string,
	hash:string,
	kind?:string,
	level?:ModelTypes["bigint"],
	network:string,
	public_key?:string,
	signature?:string,
	source?:string,
	status?:string,
	storage_limit?:string,
	updated_at?:ModelTypes["bigint"]
};
	/** aggregated selection of "mempool_reveal" */
["mempool_reveal_aggregate"]: {
		aggregate?:ModelTypes["mempool_reveal_aggregate_fields"],
	nodes:ModelTypes["mempool_reveal"][]
};
	/** aggregate fields of "mempool_reveal" */
["mempool_reveal_aggregate_fields"]: {
		avg?:ModelTypes["mempool_reveal_avg_fields"],
	count?:number,
	max?:ModelTypes["mempool_reveal_max_fields"],
	min?:ModelTypes["mempool_reveal_min_fields"],
	stddev?:ModelTypes["mempool_reveal_stddev_fields"],
	stddev_pop?:ModelTypes["mempool_reveal_stddev_pop_fields"],
	stddev_samp?:ModelTypes["mempool_reveal_stddev_samp_fields"],
	sum?:ModelTypes["mempool_reveal_sum_fields"],
	var_pop?:ModelTypes["mempool_reveal_var_pop_fields"],
	var_samp?:ModelTypes["mempool_reveal_var_samp_fields"],
	variance?:ModelTypes["mempool_reveal_variance_fields"]
};
	/** order by aggregate values of table "mempool_reveal" */
["mempool_reveal_aggregate_order_by"]: GraphQLTypes["mempool_reveal_aggregate_order_by"];
	/** aggregate avg on columns */
["mempool_reveal_avg_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	updated_at?:number
};
	/** order by avg() on columns of table "mempool_reveal" */
["mempool_reveal_avg_order_by"]: GraphQLTypes["mempool_reveal_avg_order_by"];
	/** Boolean expression to filter rows from the table "mempool_reveal". All fields are combined with a logical 'AND'. */
["mempool_reveal_bool_exp"]: GraphQLTypes["mempool_reveal_bool_exp"];
	/** aggregate max on columns */
["mempool_reveal_max_fields"]: {
		branch?:string,
	counter?:string,
	created_at?:ModelTypes["bigint"],
	expiration_level?:ModelTypes["bigint"],
	fee?:string,
	gas_limit?:string,
	hash?:string,
	kind?:string,
	level?:ModelTypes["bigint"],
	network?:string,
	public_key?:string,
	signature?:string,
	source?:string,
	status?:string,
	storage_limit?:string,
	updated_at?:ModelTypes["bigint"]
};
	/** order by max() on columns of table "mempool_reveal" */
["mempool_reveal_max_order_by"]: GraphQLTypes["mempool_reveal_max_order_by"];
	/** aggregate min on columns */
["mempool_reveal_min_fields"]: {
		branch?:string,
	counter?:string,
	created_at?:ModelTypes["bigint"],
	expiration_level?:ModelTypes["bigint"],
	fee?:string,
	gas_limit?:string,
	hash?:string,
	kind?:string,
	level?:ModelTypes["bigint"],
	network?:string,
	public_key?:string,
	signature?:string,
	source?:string,
	status?:string,
	storage_limit?:string,
	updated_at?:ModelTypes["bigint"]
};
	/** order by min() on columns of table "mempool_reveal" */
["mempool_reveal_min_order_by"]: GraphQLTypes["mempool_reveal_min_order_by"];
	/** ordering options when selecting data from "mempool_reveal" */
["mempool_reveal_order_by"]: GraphQLTypes["mempool_reveal_order_by"];
	/** primary key columns input for table: "mempool_reveal" */
["mempool_reveal_pk_columns_input"]: GraphQLTypes["mempool_reveal_pk_columns_input"];
	/** select columns of table "mempool_reveal" */
["mempool_reveal_select_column"]: GraphQLTypes["mempool_reveal_select_column"];
	/** aggregate stddev on columns */
["mempool_reveal_stddev_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	updated_at?:number
};
	/** order by stddev() on columns of table "mempool_reveal" */
["mempool_reveal_stddev_order_by"]: GraphQLTypes["mempool_reveal_stddev_order_by"];
	/** aggregate stddev_pop on columns */
["mempool_reveal_stddev_pop_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	updated_at?:number
};
	/** order by stddev_pop() on columns of table "mempool_reveal" */
["mempool_reveal_stddev_pop_order_by"]: GraphQLTypes["mempool_reveal_stddev_pop_order_by"];
	/** aggregate stddev_samp on columns */
["mempool_reveal_stddev_samp_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	updated_at?:number
};
	/** order by stddev_samp() on columns of table "mempool_reveal" */
["mempool_reveal_stddev_samp_order_by"]: GraphQLTypes["mempool_reveal_stddev_samp_order_by"];
	/** aggregate sum on columns */
["mempool_reveal_sum_fields"]: {
		created_at?:ModelTypes["bigint"],
	expiration_level?:ModelTypes["bigint"],
	level?:ModelTypes["bigint"],
	updated_at?:ModelTypes["bigint"]
};
	/** order by sum() on columns of table "mempool_reveal" */
["mempool_reveal_sum_order_by"]: GraphQLTypes["mempool_reveal_sum_order_by"];
	/** aggregate var_pop on columns */
["mempool_reveal_var_pop_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	updated_at?:number
};
	/** order by var_pop() on columns of table "mempool_reveal" */
["mempool_reveal_var_pop_order_by"]: GraphQLTypes["mempool_reveal_var_pop_order_by"];
	/** aggregate var_samp on columns */
["mempool_reveal_var_samp_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	updated_at?:number
};
	/** order by var_samp() on columns of table "mempool_reveal" */
["mempool_reveal_var_samp_order_by"]: GraphQLTypes["mempool_reveal_var_samp_order_by"];
	/** aggregate variance on columns */
["mempool_reveal_variance_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	updated_at?:number
};
	/** order by variance() on columns of table "mempool_reveal" */
["mempool_reveal_variance_order_by"]: GraphQLTypes["mempool_reveal_variance_order_by"];
	/** columns and relationships of "mempool_transaction" */
["mempool_transaction"]: {
		amount?:string,
	branch?:string,
	counter:string,
	created_at?:ModelTypes["bigint"],
	destination?:string,
	errors?:ModelTypes["jsonb"],
	expiration_level?:ModelTypes["bigint"],
	fee?:string,
	gas_limit?:string,
	hash:string,
	kind?:string,
	level?:ModelTypes["bigint"],
	network:string,
	parameters?:ModelTypes["jsonb"],
	signature?:string,
	source?:string,
	status?:string,
	storage_limit?:string,
	updated_at?:ModelTypes["bigint"]
};
	/** aggregated selection of "mempool_transaction" */
["mempool_transaction_aggregate"]: {
		aggregate?:ModelTypes["mempool_transaction_aggregate_fields"],
	nodes:ModelTypes["mempool_transaction"][]
};
	/** aggregate fields of "mempool_transaction" */
["mempool_transaction_aggregate_fields"]: {
		avg?:ModelTypes["mempool_transaction_avg_fields"],
	count?:number,
	max?:ModelTypes["mempool_transaction_max_fields"],
	min?:ModelTypes["mempool_transaction_min_fields"],
	stddev?:ModelTypes["mempool_transaction_stddev_fields"],
	stddev_pop?:ModelTypes["mempool_transaction_stddev_pop_fields"],
	stddev_samp?:ModelTypes["mempool_transaction_stddev_samp_fields"],
	sum?:ModelTypes["mempool_transaction_sum_fields"],
	var_pop?:ModelTypes["mempool_transaction_var_pop_fields"],
	var_samp?:ModelTypes["mempool_transaction_var_samp_fields"],
	variance?:ModelTypes["mempool_transaction_variance_fields"]
};
	/** order by aggregate values of table "mempool_transaction" */
["mempool_transaction_aggregate_order_by"]: GraphQLTypes["mempool_transaction_aggregate_order_by"];
	/** aggregate avg on columns */
["mempool_transaction_avg_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	updated_at?:number
};
	/** order by avg() on columns of table "mempool_transaction" */
["mempool_transaction_avg_order_by"]: GraphQLTypes["mempool_transaction_avg_order_by"];
	/** Boolean expression to filter rows from the table "mempool_transaction". All fields are combined with a logical 'AND'. */
["mempool_transaction_bool_exp"]: GraphQLTypes["mempool_transaction_bool_exp"];
	/** aggregate max on columns */
["mempool_transaction_max_fields"]: {
		amount?:string,
	branch?:string,
	counter?:string,
	created_at?:ModelTypes["bigint"],
	destination?:string,
	expiration_level?:ModelTypes["bigint"],
	fee?:string,
	gas_limit?:string,
	hash?:string,
	kind?:string,
	level?:ModelTypes["bigint"],
	network?:string,
	signature?:string,
	source?:string,
	status?:string,
	storage_limit?:string,
	updated_at?:ModelTypes["bigint"]
};
	/** order by max() on columns of table "mempool_transaction" */
["mempool_transaction_max_order_by"]: GraphQLTypes["mempool_transaction_max_order_by"];
	/** aggregate min on columns */
["mempool_transaction_min_fields"]: {
		amount?:string,
	branch?:string,
	counter?:string,
	created_at?:ModelTypes["bigint"],
	destination?:string,
	expiration_level?:ModelTypes["bigint"],
	fee?:string,
	gas_limit?:string,
	hash?:string,
	kind?:string,
	level?:ModelTypes["bigint"],
	network?:string,
	signature?:string,
	source?:string,
	status?:string,
	storage_limit?:string,
	updated_at?:ModelTypes["bigint"]
};
	/** order by min() on columns of table "mempool_transaction" */
["mempool_transaction_min_order_by"]: GraphQLTypes["mempool_transaction_min_order_by"];
	/** ordering options when selecting data from "mempool_transaction" */
["mempool_transaction_order_by"]: GraphQLTypes["mempool_transaction_order_by"];
	/** primary key columns input for table: "mempool_transaction" */
["mempool_transaction_pk_columns_input"]: GraphQLTypes["mempool_transaction_pk_columns_input"];
	/** select columns of table "mempool_transaction" */
["mempool_transaction_select_column"]: GraphQLTypes["mempool_transaction_select_column"];
	/** aggregate stddev on columns */
["mempool_transaction_stddev_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	updated_at?:number
};
	/** order by stddev() on columns of table "mempool_transaction" */
["mempool_transaction_stddev_order_by"]: GraphQLTypes["mempool_transaction_stddev_order_by"];
	/** aggregate stddev_pop on columns */
["mempool_transaction_stddev_pop_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	updated_at?:number
};
	/** order by stddev_pop() on columns of table "mempool_transaction" */
["mempool_transaction_stddev_pop_order_by"]: GraphQLTypes["mempool_transaction_stddev_pop_order_by"];
	/** aggregate stddev_samp on columns */
["mempool_transaction_stddev_samp_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	updated_at?:number
};
	/** order by stddev_samp() on columns of table "mempool_transaction" */
["mempool_transaction_stddev_samp_order_by"]: GraphQLTypes["mempool_transaction_stddev_samp_order_by"];
	/** aggregate sum on columns */
["mempool_transaction_sum_fields"]: {
		created_at?:ModelTypes["bigint"],
	expiration_level?:ModelTypes["bigint"],
	level?:ModelTypes["bigint"],
	updated_at?:ModelTypes["bigint"]
};
	/** order by sum() on columns of table "mempool_transaction" */
["mempool_transaction_sum_order_by"]: GraphQLTypes["mempool_transaction_sum_order_by"];
	/** aggregate var_pop on columns */
["mempool_transaction_var_pop_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	updated_at?:number
};
	/** order by var_pop() on columns of table "mempool_transaction" */
["mempool_transaction_var_pop_order_by"]: GraphQLTypes["mempool_transaction_var_pop_order_by"];
	/** aggregate var_samp on columns */
["mempool_transaction_var_samp_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	updated_at?:number
};
	/** order by var_samp() on columns of table "mempool_transaction" */
["mempool_transaction_var_samp_order_by"]: GraphQLTypes["mempool_transaction_var_samp_order_by"];
	/** aggregate variance on columns */
["mempool_transaction_variance_fields"]: {
		created_at?:number,
	expiration_level?:number,
	level?:number,
	updated_at?:number
};
	/** order by variance() on columns of table "mempool_transaction" */
["mempool_transaction_variance_order_by"]: GraphQLTypes["mempool_transaction_variance_order_by"];
	/** column ordering options */
["order_by"]: GraphQLTypes["order_by"];
	/** query root */
["query_root"]: {
		/** fetch data from the table: "mempool_activate_account" */
	mempool_activate_account:ModelTypes["mempool_activate_account"][],
	/** fetch aggregated fields from the table: "mempool_activate_account" */
	mempool_activate_account_aggregate:ModelTypes["mempool_activate_account_aggregate"],
	/** fetch data from the table: "mempool_activate_account" using primary key columns */
	mempool_activate_account_by_pk?:ModelTypes["mempool_activate_account"],
	/** fetch data from the table: "mempool_ballot" */
	mempool_ballot:ModelTypes["mempool_ballot"][],
	/** fetch aggregated fields from the table: "mempool_ballot" */
	mempool_ballot_aggregate:ModelTypes["mempool_ballot_aggregate"],
	/** fetch data from the table: "mempool_ballot" using primary key columns */
	mempool_ballot_by_pk?:ModelTypes["mempool_ballot"],
	/** fetch data from the table: "mempool_delegation" */
	mempool_delegation:ModelTypes["mempool_delegation"][],
	/** fetch aggregated fields from the table: "mempool_delegation" */
	mempool_delegation_aggregate:ModelTypes["mempool_delegation_aggregate"],
	/** fetch data from the table: "mempool_delegation" using primary key columns */
	mempool_delegation_by_pk?:ModelTypes["mempool_delegation"],
	/** fetch data from the table: "mempool_double_baking" */
	mempool_double_baking:ModelTypes["mempool_double_baking"][],
	/** fetch aggregated fields from the table: "mempool_double_baking" */
	mempool_double_baking_aggregate:ModelTypes["mempool_double_baking_aggregate"],
	/** fetch data from the table: "mempool_double_baking" using primary key columns */
	mempool_double_baking_by_pk?:ModelTypes["mempool_double_baking"],
	/** fetch data from the table: "mempool_double_endorsing" */
	mempool_double_endorsing:ModelTypes["mempool_double_endorsing"][],
	/** fetch aggregated fields from the table: "mempool_double_endorsing" */
	mempool_double_endorsing_aggregate:ModelTypes["mempool_double_endorsing_aggregate"],
	/** fetch data from the table: "mempool_double_endorsing" using primary key columns */
	mempool_double_endorsing_by_pk?:ModelTypes["mempool_double_endorsing"],
	/** fetch data from the table: "mempool_endorsement" */
	mempool_endorsement:ModelTypes["mempool_endorsement"][],
	/** fetch aggregated fields from the table: "mempool_endorsement" */
	mempool_endorsement_aggregate:ModelTypes["mempool_endorsement_aggregate"],
	/** fetch data from the table: "mempool_endorsement" using primary key columns */
	mempool_endorsement_by_pk?:ModelTypes["mempool_endorsement"],
	/** fetch data from the table: "mempool_nonce_revelation" */
	mempool_nonce_revelation:ModelTypes["mempool_nonce_revelation"][],
	/** fetch aggregated fields from the table: "mempool_nonce_revelation" */
	mempool_nonce_revelation_aggregate:ModelTypes["mempool_nonce_revelation_aggregate"],
	/** fetch data from the table: "mempool_nonce_revelation" using primary key columns */
	mempool_nonce_revelation_by_pk?:ModelTypes["mempool_nonce_revelation"],
	/** fetch data from the table: "mempool_origination" */
	mempool_origination:ModelTypes["mempool_origination"][],
	/** fetch aggregated fields from the table: "mempool_origination" */
	mempool_origination_aggregate:ModelTypes["mempool_origination_aggregate"],
	/** fetch data from the table: "mempool_origination" using primary key columns */
	mempool_origination_by_pk?:ModelTypes["mempool_origination"],
	/** fetch data from the table: "mempool_proposal" */
	mempool_proposal:ModelTypes["mempool_proposal"][],
	/** fetch aggregated fields from the table: "mempool_proposal" */
	mempool_proposal_aggregate:ModelTypes["mempool_proposal_aggregate"],
	/** fetch data from the table: "mempool_proposal" using primary key columns */
	mempool_proposal_by_pk?:ModelTypes["mempool_proposal"],
	/** fetch data from the table: "mempool_reveal" */
	mempool_reveal:ModelTypes["mempool_reveal"][],
	/** fetch aggregated fields from the table: "mempool_reveal" */
	mempool_reveal_aggregate:ModelTypes["mempool_reveal_aggregate"],
	/** fetch data from the table: "mempool_reveal" using primary key columns */
	mempool_reveal_by_pk?:ModelTypes["mempool_reveal"],
	/** fetch data from the table: "mempool_transaction" */
	mempool_transaction:ModelTypes["mempool_transaction"][],
	/** fetch aggregated fields from the table: "mempool_transaction" */
	mempool_transaction_aggregate:ModelTypes["mempool_transaction_aggregate"],
	/** fetch data from the table: "mempool_transaction" using primary key columns */
	mempool_transaction_by_pk?:ModelTypes["mempool_transaction"]
};
	/** subscription root */
["subscription_root"]: {
		/** fetch data from the table: "mempool_activate_account" */
	mempool_activate_account:ModelTypes["mempool_activate_account"][],
	/** fetch aggregated fields from the table: "mempool_activate_account" */
	mempool_activate_account_aggregate:ModelTypes["mempool_activate_account_aggregate"],
	/** fetch data from the table: "mempool_activate_account" using primary key columns */
	mempool_activate_account_by_pk?:ModelTypes["mempool_activate_account"],
	/** fetch data from the table: "mempool_ballot" */
	mempool_ballot:ModelTypes["mempool_ballot"][],
	/** fetch aggregated fields from the table: "mempool_ballot" */
	mempool_ballot_aggregate:ModelTypes["mempool_ballot_aggregate"],
	/** fetch data from the table: "mempool_ballot" using primary key columns */
	mempool_ballot_by_pk?:ModelTypes["mempool_ballot"],
	/** fetch data from the table: "mempool_delegation" */
	mempool_delegation:ModelTypes["mempool_delegation"][],
	/** fetch aggregated fields from the table: "mempool_delegation" */
	mempool_delegation_aggregate:ModelTypes["mempool_delegation_aggregate"],
	/** fetch data from the table: "mempool_delegation" using primary key columns */
	mempool_delegation_by_pk?:ModelTypes["mempool_delegation"],
	/** fetch data from the table: "mempool_double_baking" */
	mempool_double_baking:ModelTypes["mempool_double_baking"][],
	/** fetch aggregated fields from the table: "mempool_double_baking" */
	mempool_double_baking_aggregate:ModelTypes["mempool_double_baking_aggregate"],
	/** fetch data from the table: "mempool_double_baking" using primary key columns */
	mempool_double_baking_by_pk?:ModelTypes["mempool_double_baking"],
	/** fetch data from the table: "mempool_double_endorsing" */
	mempool_double_endorsing:ModelTypes["mempool_double_endorsing"][],
	/** fetch aggregated fields from the table: "mempool_double_endorsing" */
	mempool_double_endorsing_aggregate:ModelTypes["mempool_double_endorsing_aggregate"],
	/** fetch data from the table: "mempool_double_endorsing" using primary key columns */
	mempool_double_endorsing_by_pk?:ModelTypes["mempool_double_endorsing"],
	/** fetch data from the table: "mempool_endorsement" */
	mempool_endorsement:ModelTypes["mempool_endorsement"][],
	/** fetch aggregated fields from the table: "mempool_endorsement" */
	mempool_endorsement_aggregate:ModelTypes["mempool_endorsement_aggregate"],
	/** fetch data from the table: "mempool_endorsement" using primary key columns */
	mempool_endorsement_by_pk?:ModelTypes["mempool_endorsement"],
	/** fetch data from the table: "mempool_nonce_revelation" */
	mempool_nonce_revelation:ModelTypes["mempool_nonce_revelation"][],
	/** fetch aggregated fields from the table: "mempool_nonce_revelation" */
	mempool_nonce_revelation_aggregate:ModelTypes["mempool_nonce_revelation_aggregate"],
	/** fetch data from the table: "mempool_nonce_revelation" using primary key columns */
	mempool_nonce_revelation_by_pk?:ModelTypes["mempool_nonce_revelation"],
	/** fetch data from the table: "mempool_origination" */
	mempool_origination:ModelTypes["mempool_origination"][],
	/** fetch aggregated fields from the table: "mempool_origination" */
	mempool_origination_aggregate:ModelTypes["mempool_origination_aggregate"],
	/** fetch data from the table: "mempool_origination" using primary key columns */
	mempool_origination_by_pk?:ModelTypes["mempool_origination"],
	/** fetch data from the table: "mempool_proposal" */
	mempool_proposal:ModelTypes["mempool_proposal"][],
	/** fetch aggregated fields from the table: "mempool_proposal" */
	mempool_proposal_aggregate:ModelTypes["mempool_proposal_aggregate"],
	/** fetch data from the table: "mempool_proposal" using primary key columns */
	mempool_proposal_by_pk?:ModelTypes["mempool_proposal"],
	/** fetch data from the table: "mempool_reveal" */
	mempool_reveal:ModelTypes["mempool_reveal"][],
	/** fetch aggregated fields from the table: "mempool_reveal" */
	mempool_reveal_aggregate:ModelTypes["mempool_reveal_aggregate"],
	/** fetch data from the table: "mempool_reveal" using primary key columns */
	mempool_reveal_by_pk?:ModelTypes["mempool_reveal"],
	/** fetch data from the table: "mempool_transaction" */
	mempool_transaction:ModelTypes["mempool_transaction"][],
	/** fetch aggregated fields from the table: "mempool_transaction" */
	mempool_transaction_aggregate:ModelTypes["mempool_transaction_aggregate"],
	/** fetch data from the table: "mempool_transaction" using primary key columns */
	mempool_transaction_by_pk?:ModelTypes["mempool_transaction"]
}
    }

export type GraphQLTypes = {
    /** expression to compare columns of type String. All fields are combined with logical 'AND'. */
["String_comparison_exp"]: {
		_eq?: string,
	_gt?: string,
	_gte?: string,
	_ilike?: string,
	_in?: Array<string>,
	_is_null?: boolean,
	_like?: string,
	_lt?: string,
	_lte?: string,
	_neq?: string,
	_nilike?: string,
	_nin?: Array<string>,
	_nlike?: string,
	_nsimilar?: string,
	_similar?: string
};
	["bigint"]:any;
	/** expression to compare columns of type bigint. All fields are combined with logical 'AND'. */
["bigint_comparison_exp"]: {
		_eq?: GraphQLTypes["bigint"],
	_gt?: GraphQLTypes["bigint"],
	_gte?: GraphQLTypes["bigint"],
	_in?: Array<GraphQLTypes["bigint"]>,
	_is_null?: boolean,
	_lt?: GraphQLTypes["bigint"],
	_lte?: GraphQLTypes["bigint"],
	_neq?: GraphQLTypes["bigint"],
	_nin?: Array<GraphQLTypes["bigint"]>
};
	["jsonb"]:any;
	/** expression to compare columns of type jsonb. All fields are combined with logical 'AND'. */
["jsonb_comparison_exp"]: {
		/** is the column contained in the given json value */
	_contained_in?: GraphQLTypes["jsonb"],
	/** does the column contain the given json value at the top level */
	_contains?: GraphQLTypes["jsonb"],
	_eq?: GraphQLTypes["jsonb"],
	_gt?: GraphQLTypes["jsonb"],
	_gte?: GraphQLTypes["jsonb"],
	/** does the string exist as a top-level key in the column */
	_has_key?: string,
	/** do all of these strings exist as top-level keys in the column */
	_has_keys_all?: Array<string>,
	/** do any of these strings exist as top-level keys in the column */
	_has_keys_any?: Array<string>,
	_in?: Array<GraphQLTypes["jsonb"]>,
	_is_null?: boolean,
	_lt?: GraphQLTypes["jsonb"],
	_lte?: GraphQLTypes["jsonb"],
	_neq?: GraphQLTypes["jsonb"],
	_nin?: Array<GraphQLTypes["jsonb"]>
};
	/** columns and relationships of "mempool_activate_account" */
["mempool_activate_account"]: {
	__typename: "mempool_activate_account",
	branch?: string,
	created_at?: GraphQLTypes["bigint"],
	errors?: GraphQLTypes["jsonb"],
	expiration_level?: GraphQLTypes["bigint"],
	hash: string,
	kind?: string,
	level?: GraphQLTypes["bigint"],
	network: string,
	pkh?: string,
	secret?: string,
	signature?: string,
	status?: string,
	updated_at?: GraphQLTypes["bigint"]
};
	/** aggregated selection of "mempool_activate_account" */
["mempool_activate_account_aggregate"]: {
	__typename: "mempool_activate_account_aggregate",
	aggregate?: GraphQLTypes["mempool_activate_account_aggregate_fields"],
	nodes: Array<GraphQLTypes["mempool_activate_account"]>
};
	/** aggregate fields of "mempool_activate_account" */
["mempool_activate_account_aggregate_fields"]: {
	__typename: "mempool_activate_account_aggregate_fields",
	avg?: GraphQLTypes["mempool_activate_account_avg_fields"],
	count?: number,
	max?: GraphQLTypes["mempool_activate_account_max_fields"],
	min?: GraphQLTypes["mempool_activate_account_min_fields"],
	stddev?: GraphQLTypes["mempool_activate_account_stddev_fields"],
	stddev_pop?: GraphQLTypes["mempool_activate_account_stddev_pop_fields"],
	stddev_samp?: GraphQLTypes["mempool_activate_account_stddev_samp_fields"],
	sum?: GraphQLTypes["mempool_activate_account_sum_fields"],
	var_pop?: GraphQLTypes["mempool_activate_account_var_pop_fields"],
	var_samp?: GraphQLTypes["mempool_activate_account_var_samp_fields"],
	variance?: GraphQLTypes["mempool_activate_account_variance_fields"]
};
	/** order by aggregate values of table "mempool_activate_account" */
["mempool_activate_account_aggregate_order_by"]: {
		avg?: GraphQLTypes["mempool_activate_account_avg_order_by"],
	count?: GraphQLTypes["order_by"],
	max?: GraphQLTypes["mempool_activate_account_max_order_by"],
	min?: GraphQLTypes["mempool_activate_account_min_order_by"],
	stddev?: GraphQLTypes["mempool_activate_account_stddev_order_by"],
	stddev_pop?: GraphQLTypes["mempool_activate_account_stddev_pop_order_by"],
	stddev_samp?: GraphQLTypes["mempool_activate_account_stddev_samp_order_by"],
	sum?: GraphQLTypes["mempool_activate_account_sum_order_by"],
	var_pop?: GraphQLTypes["mempool_activate_account_var_pop_order_by"],
	var_samp?: GraphQLTypes["mempool_activate_account_var_samp_order_by"],
	variance?: GraphQLTypes["mempool_activate_account_variance_order_by"]
};
	/** aggregate avg on columns */
["mempool_activate_account_avg_fields"]: {
	__typename: "mempool_activate_account_avg_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	updated_at?: number
};
	/** order by avg() on columns of table "mempool_activate_account" */
["mempool_activate_account_avg_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** Boolean expression to filter rows from the table "mempool_activate_account". All fields are combined with a logical 'AND'. */
["mempool_activate_account_bool_exp"]: {
		_and?: Array<GraphQLTypes["mempool_activate_account_bool_exp"] | undefined>,
	_not?: GraphQLTypes["mempool_activate_account_bool_exp"],
	_or?: Array<GraphQLTypes["mempool_activate_account_bool_exp"] | undefined>,
	branch?: GraphQLTypes["String_comparison_exp"],
	created_at?: GraphQLTypes["bigint_comparison_exp"],
	errors?: GraphQLTypes["jsonb_comparison_exp"],
	expiration_level?: GraphQLTypes["bigint_comparison_exp"],
	hash?: GraphQLTypes["String_comparison_exp"],
	kind?: GraphQLTypes["String_comparison_exp"],
	level?: GraphQLTypes["bigint_comparison_exp"],
	network?: GraphQLTypes["String_comparison_exp"],
	pkh?: GraphQLTypes["String_comparison_exp"],
	secret?: GraphQLTypes["String_comparison_exp"],
	signature?: GraphQLTypes["String_comparison_exp"],
	status?: GraphQLTypes["String_comparison_exp"],
	updated_at?: GraphQLTypes["bigint_comparison_exp"]
};
	/** aggregate max on columns */
["mempool_activate_account_max_fields"]: {
	__typename: "mempool_activate_account_max_fields",
	branch?: string,
	created_at?: GraphQLTypes["bigint"],
	expiration_level?: GraphQLTypes["bigint"],
	hash?: string,
	kind?: string,
	level?: GraphQLTypes["bigint"],
	network?: string,
	pkh?: string,
	secret?: string,
	signature?: string,
	status?: string,
	updated_at?: GraphQLTypes["bigint"]
};
	/** order by max() on columns of table "mempool_activate_account" */
["mempool_activate_account_max_order_by"]: {
		branch?: GraphQLTypes["order_by"],
	created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	hash?: GraphQLTypes["order_by"],
	kind?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	network?: GraphQLTypes["order_by"],
	pkh?: GraphQLTypes["order_by"],
	secret?: GraphQLTypes["order_by"],
	signature?: GraphQLTypes["order_by"],
	status?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate min on columns */
["mempool_activate_account_min_fields"]: {
	__typename: "mempool_activate_account_min_fields",
	branch?: string,
	created_at?: GraphQLTypes["bigint"],
	expiration_level?: GraphQLTypes["bigint"],
	hash?: string,
	kind?: string,
	level?: GraphQLTypes["bigint"],
	network?: string,
	pkh?: string,
	secret?: string,
	signature?: string,
	status?: string,
	updated_at?: GraphQLTypes["bigint"]
};
	/** order by min() on columns of table "mempool_activate_account" */
["mempool_activate_account_min_order_by"]: {
		branch?: GraphQLTypes["order_by"],
	created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	hash?: GraphQLTypes["order_by"],
	kind?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	network?: GraphQLTypes["order_by"],
	pkh?: GraphQLTypes["order_by"],
	secret?: GraphQLTypes["order_by"],
	signature?: GraphQLTypes["order_by"],
	status?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** ordering options when selecting data from "mempool_activate_account" */
["mempool_activate_account_order_by"]: {
		branch?: GraphQLTypes["order_by"],
	created_at?: GraphQLTypes["order_by"],
	errors?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	hash?: GraphQLTypes["order_by"],
	kind?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	network?: GraphQLTypes["order_by"],
	pkh?: GraphQLTypes["order_by"],
	secret?: GraphQLTypes["order_by"],
	signature?: GraphQLTypes["order_by"],
	status?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** primary key columns input for table: "mempool_activate_account" */
["mempool_activate_account_pk_columns_input"]: {
		hash: string,
	network: string
};
	/** select columns of table "mempool_activate_account" */
["mempool_activate_account_select_column"]: mempool_activate_account_select_column;
	/** aggregate stddev on columns */
["mempool_activate_account_stddev_fields"]: {
	__typename: "mempool_activate_account_stddev_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	updated_at?: number
};
	/** order by stddev() on columns of table "mempool_activate_account" */
["mempool_activate_account_stddev_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate stddev_pop on columns */
["mempool_activate_account_stddev_pop_fields"]: {
	__typename: "mempool_activate_account_stddev_pop_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	updated_at?: number
};
	/** order by stddev_pop() on columns of table "mempool_activate_account" */
["mempool_activate_account_stddev_pop_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate stddev_samp on columns */
["mempool_activate_account_stddev_samp_fields"]: {
	__typename: "mempool_activate_account_stddev_samp_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	updated_at?: number
};
	/** order by stddev_samp() on columns of table "mempool_activate_account" */
["mempool_activate_account_stddev_samp_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate sum on columns */
["mempool_activate_account_sum_fields"]: {
	__typename: "mempool_activate_account_sum_fields",
	created_at?: GraphQLTypes["bigint"],
	expiration_level?: GraphQLTypes["bigint"],
	level?: GraphQLTypes["bigint"],
	updated_at?: GraphQLTypes["bigint"]
};
	/** order by sum() on columns of table "mempool_activate_account" */
["mempool_activate_account_sum_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate var_pop on columns */
["mempool_activate_account_var_pop_fields"]: {
	__typename: "mempool_activate_account_var_pop_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	updated_at?: number
};
	/** order by var_pop() on columns of table "mempool_activate_account" */
["mempool_activate_account_var_pop_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate var_samp on columns */
["mempool_activate_account_var_samp_fields"]: {
	__typename: "mempool_activate_account_var_samp_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	updated_at?: number
};
	/** order by var_samp() on columns of table "mempool_activate_account" */
["mempool_activate_account_var_samp_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate variance on columns */
["mempool_activate_account_variance_fields"]: {
	__typename: "mempool_activate_account_variance_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	updated_at?: number
};
	/** order by variance() on columns of table "mempool_activate_account" */
["mempool_activate_account_variance_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** columns and relationships of "mempool_ballot" */
["mempool_ballot"]: {
	__typename: "mempool_ballot",
	ballot?: string,
	branch?: string,
	created_at?: GraphQLTypes["bigint"],
	errors?: GraphQLTypes["jsonb"],
	expiration_level?: GraphQLTypes["bigint"],
	hash: string,
	kind?: string,
	level?: GraphQLTypes["bigint"],
	network: string,
	period?: GraphQLTypes["bigint"],
	signature?: string,
	status?: string,
	updated_at?: GraphQLTypes["bigint"]
};
	/** aggregated selection of "mempool_ballot" */
["mempool_ballot_aggregate"]: {
	__typename: "mempool_ballot_aggregate",
	aggregate?: GraphQLTypes["mempool_ballot_aggregate_fields"],
	nodes: Array<GraphQLTypes["mempool_ballot"]>
};
	/** aggregate fields of "mempool_ballot" */
["mempool_ballot_aggregate_fields"]: {
	__typename: "mempool_ballot_aggregate_fields",
	avg?: GraphQLTypes["mempool_ballot_avg_fields"],
	count?: number,
	max?: GraphQLTypes["mempool_ballot_max_fields"],
	min?: GraphQLTypes["mempool_ballot_min_fields"],
	stddev?: GraphQLTypes["mempool_ballot_stddev_fields"],
	stddev_pop?: GraphQLTypes["mempool_ballot_stddev_pop_fields"],
	stddev_samp?: GraphQLTypes["mempool_ballot_stddev_samp_fields"],
	sum?: GraphQLTypes["mempool_ballot_sum_fields"],
	var_pop?: GraphQLTypes["mempool_ballot_var_pop_fields"],
	var_samp?: GraphQLTypes["mempool_ballot_var_samp_fields"],
	variance?: GraphQLTypes["mempool_ballot_variance_fields"]
};
	/** order by aggregate values of table "mempool_ballot" */
["mempool_ballot_aggregate_order_by"]: {
		avg?: GraphQLTypes["mempool_ballot_avg_order_by"],
	count?: GraphQLTypes["order_by"],
	max?: GraphQLTypes["mempool_ballot_max_order_by"],
	min?: GraphQLTypes["mempool_ballot_min_order_by"],
	stddev?: GraphQLTypes["mempool_ballot_stddev_order_by"],
	stddev_pop?: GraphQLTypes["mempool_ballot_stddev_pop_order_by"],
	stddev_samp?: GraphQLTypes["mempool_ballot_stddev_samp_order_by"],
	sum?: GraphQLTypes["mempool_ballot_sum_order_by"],
	var_pop?: GraphQLTypes["mempool_ballot_var_pop_order_by"],
	var_samp?: GraphQLTypes["mempool_ballot_var_samp_order_by"],
	variance?: GraphQLTypes["mempool_ballot_variance_order_by"]
};
	/** aggregate avg on columns */
["mempool_ballot_avg_fields"]: {
	__typename: "mempool_ballot_avg_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	period?: number,
	updated_at?: number
};
	/** order by avg() on columns of table "mempool_ballot" */
["mempool_ballot_avg_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	period?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** Boolean expression to filter rows from the table "mempool_ballot". All fields are combined with a logical 'AND'. */
["mempool_ballot_bool_exp"]: {
		_and?: Array<GraphQLTypes["mempool_ballot_bool_exp"] | undefined>,
	_not?: GraphQLTypes["mempool_ballot_bool_exp"],
	_or?: Array<GraphQLTypes["mempool_ballot_bool_exp"] | undefined>,
	ballot?: GraphQLTypes["String_comparison_exp"],
	branch?: GraphQLTypes["String_comparison_exp"],
	created_at?: GraphQLTypes["bigint_comparison_exp"],
	errors?: GraphQLTypes["jsonb_comparison_exp"],
	expiration_level?: GraphQLTypes["bigint_comparison_exp"],
	hash?: GraphQLTypes["String_comparison_exp"],
	kind?: GraphQLTypes["String_comparison_exp"],
	level?: GraphQLTypes["bigint_comparison_exp"],
	network?: GraphQLTypes["String_comparison_exp"],
	period?: GraphQLTypes["bigint_comparison_exp"],
	signature?: GraphQLTypes["String_comparison_exp"],
	status?: GraphQLTypes["String_comparison_exp"],
	updated_at?: GraphQLTypes["bigint_comparison_exp"]
};
	/** aggregate max on columns */
["mempool_ballot_max_fields"]: {
	__typename: "mempool_ballot_max_fields",
	ballot?: string,
	branch?: string,
	created_at?: GraphQLTypes["bigint"],
	expiration_level?: GraphQLTypes["bigint"],
	hash?: string,
	kind?: string,
	level?: GraphQLTypes["bigint"],
	network?: string,
	period?: GraphQLTypes["bigint"],
	signature?: string,
	status?: string,
	updated_at?: GraphQLTypes["bigint"]
};
	/** order by max() on columns of table "mempool_ballot" */
["mempool_ballot_max_order_by"]: {
		ballot?: GraphQLTypes["order_by"],
	branch?: GraphQLTypes["order_by"],
	created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	hash?: GraphQLTypes["order_by"],
	kind?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	network?: GraphQLTypes["order_by"],
	period?: GraphQLTypes["order_by"],
	signature?: GraphQLTypes["order_by"],
	status?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate min on columns */
["mempool_ballot_min_fields"]: {
	__typename: "mempool_ballot_min_fields",
	ballot?: string,
	branch?: string,
	created_at?: GraphQLTypes["bigint"],
	expiration_level?: GraphQLTypes["bigint"],
	hash?: string,
	kind?: string,
	level?: GraphQLTypes["bigint"],
	network?: string,
	period?: GraphQLTypes["bigint"],
	signature?: string,
	status?: string,
	updated_at?: GraphQLTypes["bigint"]
};
	/** order by min() on columns of table "mempool_ballot" */
["mempool_ballot_min_order_by"]: {
		ballot?: GraphQLTypes["order_by"],
	branch?: GraphQLTypes["order_by"],
	created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	hash?: GraphQLTypes["order_by"],
	kind?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	network?: GraphQLTypes["order_by"],
	period?: GraphQLTypes["order_by"],
	signature?: GraphQLTypes["order_by"],
	status?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** ordering options when selecting data from "mempool_ballot" */
["mempool_ballot_order_by"]: {
		ballot?: GraphQLTypes["order_by"],
	branch?: GraphQLTypes["order_by"],
	created_at?: GraphQLTypes["order_by"],
	errors?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	hash?: GraphQLTypes["order_by"],
	kind?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	network?: GraphQLTypes["order_by"],
	period?: GraphQLTypes["order_by"],
	signature?: GraphQLTypes["order_by"],
	status?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** primary key columns input for table: "mempool_ballot" */
["mempool_ballot_pk_columns_input"]: {
		hash: string,
	network: string
};
	/** select columns of table "mempool_ballot" */
["mempool_ballot_select_column"]: mempool_ballot_select_column;
	/** aggregate stddev on columns */
["mempool_ballot_stddev_fields"]: {
	__typename: "mempool_ballot_stddev_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	period?: number,
	updated_at?: number
};
	/** order by stddev() on columns of table "mempool_ballot" */
["mempool_ballot_stddev_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	period?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate stddev_pop on columns */
["mempool_ballot_stddev_pop_fields"]: {
	__typename: "mempool_ballot_stddev_pop_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	period?: number,
	updated_at?: number
};
	/** order by stddev_pop() on columns of table "mempool_ballot" */
["mempool_ballot_stddev_pop_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	period?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate stddev_samp on columns */
["mempool_ballot_stddev_samp_fields"]: {
	__typename: "mempool_ballot_stddev_samp_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	period?: number,
	updated_at?: number
};
	/** order by stddev_samp() on columns of table "mempool_ballot" */
["mempool_ballot_stddev_samp_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	period?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate sum on columns */
["mempool_ballot_sum_fields"]: {
	__typename: "mempool_ballot_sum_fields",
	created_at?: GraphQLTypes["bigint"],
	expiration_level?: GraphQLTypes["bigint"],
	level?: GraphQLTypes["bigint"],
	period?: GraphQLTypes["bigint"],
	updated_at?: GraphQLTypes["bigint"]
};
	/** order by sum() on columns of table "mempool_ballot" */
["mempool_ballot_sum_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	period?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate var_pop on columns */
["mempool_ballot_var_pop_fields"]: {
	__typename: "mempool_ballot_var_pop_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	period?: number,
	updated_at?: number
};
	/** order by var_pop() on columns of table "mempool_ballot" */
["mempool_ballot_var_pop_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	period?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate var_samp on columns */
["mempool_ballot_var_samp_fields"]: {
	__typename: "mempool_ballot_var_samp_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	period?: number,
	updated_at?: number
};
	/** order by var_samp() on columns of table "mempool_ballot" */
["mempool_ballot_var_samp_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	period?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate variance on columns */
["mempool_ballot_variance_fields"]: {
	__typename: "mempool_ballot_variance_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	period?: number,
	updated_at?: number
};
	/** order by variance() on columns of table "mempool_ballot" */
["mempool_ballot_variance_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	period?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** columns and relationships of "mempool_delegation" */
["mempool_delegation"]: {
	__typename: "mempool_delegation",
	branch?: string,
	counter: string,
	created_at?: GraphQLTypes["bigint"],
	delegate?: string,
	errors?: GraphQLTypes["jsonb"],
	expiration_level?: GraphQLTypes["bigint"],
	fee?: string,
	gas_limit?: string,
	hash: string,
	kind?: string,
	level?: GraphQLTypes["bigint"],
	network: string,
	signature?: string,
	status?: string,
	storage_limit?: string,
	updated_at?: GraphQLTypes["bigint"]
};
	/** aggregated selection of "mempool_delegation" */
["mempool_delegation_aggregate"]: {
	__typename: "mempool_delegation_aggregate",
	aggregate?: GraphQLTypes["mempool_delegation_aggregate_fields"],
	nodes: Array<GraphQLTypes["mempool_delegation"]>
};
	/** aggregate fields of "mempool_delegation" */
["mempool_delegation_aggregate_fields"]: {
	__typename: "mempool_delegation_aggregate_fields",
	avg?: GraphQLTypes["mempool_delegation_avg_fields"],
	count?: number,
	max?: GraphQLTypes["mempool_delegation_max_fields"],
	min?: GraphQLTypes["mempool_delegation_min_fields"],
	stddev?: GraphQLTypes["mempool_delegation_stddev_fields"],
	stddev_pop?: GraphQLTypes["mempool_delegation_stddev_pop_fields"],
	stddev_samp?: GraphQLTypes["mempool_delegation_stddev_samp_fields"],
	sum?: GraphQLTypes["mempool_delegation_sum_fields"],
	var_pop?: GraphQLTypes["mempool_delegation_var_pop_fields"],
	var_samp?: GraphQLTypes["mempool_delegation_var_samp_fields"],
	variance?: GraphQLTypes["mempool_delegation_variance_fields"]
};
	/** order by aggregate values of table "mempool_delegation" */
["mempool_delegation_aggregate_order_by"]: {
		avg?: GraphQLTypes["mempool_delegation_avg_order_by"],
	count?: GraphQLTypes["order_by"],
	max?: GraphQLTypes["mempool_delegation_max_order_by"],
	min?: GraphQLTypes["mempool_delegation_min_order_by"],
	stddev?: GraphQLTypes["mempool_delegation_stddev_order_by"],
	stddev_pop?: GraphQLTypes["mempool_delegation_stddev_pop_order_by"],
	stddev_samp?: GraphQLTypes["mempool_delegation_stddev_samp_order_by"],
	sum?: GraphQLTypes["mempool_delegation_sum_order_by"],
	var_pop?: GraphQLTypes["mempool_delegation_var_pop_order_by"],
	var_samp?: GraphQLTypes["mempool_delegation_var_samp_order_by"],
	variance?: GraphQLTypes["mempool_delegation_variance_order_by"]
};
	/** aggregate avg on columns */
["mempool_delegation_avg_fields"]: {
	__typename: "mempool_delegation_avg_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	updated_at?: number
};
	/** order by avg() on columns of table "mempool_delegation" */
["mempool_delegation_avg_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** Boolean expression to filter rows from the table "mempool_delegation". All fields are combined with a logical 'AND'. */
["mempool_delegation_bool_exp"]: {
		_and?: Array<GraphQLTypes["mempool_delegation_bool_exp"] | undefined>,
	_not?: GraphQLTypes["mempool_delegation_bool_exp"],
	_or?: Array<GraphQLTypes["mempool_delegation_bool_exp"] | undefined>,
	branch?: GraphQLTypes["String_comparison_exp"],
	counter?: GraphQLTypes["String_comparison_exp"],
	created_at?: GraphQLTypes["bigint_comparison_exp"],
	delegate?: GraphQLTypes["String_comparison_exp"],
	errors?: GraphQLTypes["jsonb_comparison_exp"],
	expiration_level?: GraphQLTypes["bigint_comparison_exp"],
	fee?: GraphQLTypes["String_comparison_exp"],
	gas_limit?: GraphQLTypes["String_comparison_exp"],
	hash?: GraphQLTypes["String_comparison_exp"],
	kind?: GraphQLTypes["String_comparison_exp"],
	level?: GraphQLTypes["bigint_comparison_exp"],
	network?: GraphQLTypes["String_comparison_exp"],
	signature?: GraphQLTypes["String_comparison_exp"],
	status?: GraphQLTypes["String_comparison_exp"],
	storage_limit?: GraphQLTypes["String_comparison_exp"],
	updated_at?: GraphQLTypes["bigint_comparison_exp"]
};
	/** aggregate max on columns */
["mempool_delegation_max_fields"]: {
	__typename: "mempool_delegation_max_fields",
	branch?: string,
	counter?: string,
	created_at?: GraphQLTypes["bigint"],
	delegate?: string,
	expiration_level?: GraphQLTypes["bigint"],
	fee?: string,
	gas_limit?: string,
	hash?: string,
	kind?: string,
	level?: GraphQLTypes["bigint"],
	network?: string,
	signature?: string,
	status?: string,
	storage_limit?: string,
	updated_at?: GraphQLTypes["bigint"]
};
	/** order by max() on columns of table "mempool_delegation" */
["mempool_delegation_max_order_by"]: {
		branch?: GraphQLTypes["order_by"],
	counter?: GraphQLTypes["order_by"],
	created_at?: GraphQLTypes["order_by"],
	delegate?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	fee?: GraphQLTypes["order_by"],
	gas_limit?: GraphQLTypes["order_by"],
	hash?: GraphQLTypes["order_by"],
	kind?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	network?: GraphQLTypes["order_by"],
	signature?: GraphQLTypes["order_by"],
	status?: GraphQLTypes["order_by"],
	storage_limit?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate min on columns */
["mempool_delegation_min_fields"]: {
	__typename: "mempool_delegation_min_fields",
	branch?: string,
	counter?: string,
	created_at?: GraphQLTypes["bigint"],
	delegate?: string,
	expiration_level?: GraphQLTypes["bigint"],
	fee?: string,
	gas_limit?: string,
	hash?: string,
	kind?: string,
	level?: GraphQLTypes["bigint"],
	network?: string,
	signature?: string,
	status?: string,
	storage_limit?: string,
	updated_at?: GraphQLTypes["bigint"]
};
	/** order by min() on columns of table "mempool_delegation" */
["mempool_delegation_min_order_by"]: {
		branch?: GraphQLTypes["order_by"],
	counter?: GraphQLTypes["order_by"],
	created_at?: GraphQLTypes["order_by"],
	delegate?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	fee?: GraphQLTypes["order_by"],
	gas_limit?: GraphQLTypes["order_by"],
	hash?: GraphQLTypes["order_by"],
	kind?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	network?: GraphQLTypes["order_by"],
	signature?: GraphQLTypes["order_by"],
	status?: GraphQLTypes["order_by"],
	storage_limit?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** ordering options when selecting data from "mempool_delegation" */
["mempool_delegation_order_by"]: {
		branch?: GraphQLTypes["order_by"],
	counter?: GraphQLTypes["order_by"],
	created_at?: GraphQLTypes["order_by"],
	delegate?: GraphQLTypes["order_by"],
	errors?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	fee?: GraphQLTypes["order_by"],
	gas_limit?: GraphQLTypes["order_by"],
	hash?: GraphQLTypes["order_by"],
	kind?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	network?: GraphQLTypes["order_by"],
	signature?: GraphQLTypes["order_by"],
	status?: GraphQLTypes["order_by"],
	storage_limit?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** primary key columns input for table: "mempool_delegation" */
["mempool_delegation_pk_columns_input"]: {
		counter: string,
	hash: string,
	network: string
};
	/** select columns of table "mempool_delegation" */
["mempool_delegation_select_column"]: mempool_delegation_select_column;
	/** aggregate stddev on columns */
["mempool_delegation_stddev_fields"]: {
	__typename: "mempool_delegation_stddev_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	updated_at?: number
};
	/** order by stddev() on columns of table "mempool_delegation" */
["mempool_delegation_stddev_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate stddev_pop on columns */
["mempool_delegation_stddev_pop_fields"]: {
	__typename: "mempool_delegation_stddev_pop_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	updated_at?: number
};
	/** order by stddev_pop() on columns of table "mempool_delegation" */
["mempool_delegation_stddev_pop_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate stddev_samp on columns */
["mempool_delegation_stddev_samp_fields"]: {
	__typename: "mempool_delegation_stddev_samp_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	updated_at?: number
};
	/** order by stddev_samp() on columns of table "mempool_delegation" */
["mempool_delegation_stddev_samp_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate sum on columns */
["mempool_delegation_sum_fields"]: {
	__typename: "mempool_delegation_sum_fields",
	created_at?: GraphQLTypes["bigint"],
	expiration_level?: GraphQLTypes["bigint"],
	level?: GraphQLTypes["bigint"],
	updated_at?: GraphQLTypes["bigint"]
};
	/** order by sum() on columns of table "mempool_delegation" */
["mempool_delegation_sum_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate var_pop on columns */
["mempool_delegation_var_pop_fields"]: {
	__typename: "mempool_delegation_var_pop_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	updated_at?: number
};
	/** order by var_pop() on columns of table "mempool_delegation" */
["mempool_delegation_var_pop_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate var_samp on columns */
["mempool_delegation_var_samp_fields"]: {
	__typename: "mempool_delegation_var_samp_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	updated_at?: number
};
	/** order by var_samp() on columns of table "mempool_delegation" */
["mempool_delegation_var_samp_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate variance on columns */
["mempool_delegation_variance_fields"]: {
	__typename: "mempool_delegation_variance_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	updated_at?: number
};
	/** order by variance() on columns of table "mempool_delegation" */
["mempool_delegation_variance_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** columns and relationships of "mempool_double_baking" */
["mempool_double_baking"]: {
	__typename: "mempool_double_baking",
	bh_1_level?: GraphQLTypes["bigint"],
	bh_1_priority?: GraphQLTypes["bigint"],
	bh_1_proof_of_work_nonce?: string,
	bh_1_proto?: GraphQLTypes["bigint"],
	bh_1_validation_pass?: GraphQLTypes["bigint"],
	bh_2_level?: GraphQLTypes["bigint"],
	bh_2_priority?: GraphQLTypes["bigint"],
	bh_2_proof_of_work_nonce?: string,
	bh_2_proto?: GraphQLTypes["bigint"],
	bh_2_validation_pass?: GraphQLTypes["bigint"],
	branch?: string,
	created_at?: GraphQLTypes["bigint"],
	errors?: GraphQLTypes["jsonb"],
	expiration_level?: GraphQLTypes["bigint"],
	hash: string,
	kind?: string,
	level?: GraphQLTypes["bigint"],
	network: string,
	signature?: string,
	status?: string,
	updated_at?: GraphQLTypes["bigint"]
};
	/** aggregated selection of "mempool_double_baking" */
["mempool_double_baking_aggregate"]: {
	__typename: "mempool_double_baking_aggregate",
	aggregate?: GraphQLTypes["mempool_double_baking_aggregate_fields"],
	nodes: Array<GraphQLTypes["mempool_double_baking"]>
};
	/** aggregate fields of "mempool_double_baking" */
["mempool_double_baking_aggregate_fields"]: {
	__typename: "mempool_double_baking_aggregate_fields",
	avg?: GraphQLTypes["mempool_double_baking_avg_fields"],
	count?: number,
	max?: GraphQLTypes["mempool_double_baking_max_fields"],
	min?: GraphQLTypes["mempool_double_baking_min_fields"],
	stddev?: GraphQLTypes["mempool_double_baking_stddev_fields"],
	stddev_pop?: GraphQLTypes["mempool_double_baking_stddev_pop_fields"],
	stddev_samp?: GraphQLTypes["mempool_double_baking_stddev_samp_fields"],
	sum?: GraphQLTypes["mempool_double_baking_sum_fields"],
	var_pop?: GraphQLTypes["mempool_double_baking_var_pop_fields"],
	var_samp?: GraphQLTypes["mempool_double_baking_var_samp_fields"],
	variance?: GraphQLTypes["mempool_double_baking_variance_fields"]
};
	/** order by aggregate values of table "mempool_double_baking" */
["mempool_double_baking_aggregate_order_by"]: {
		avg?: GraphQLTypes["mempool_double_baking_avg_order_by"],
	count?: GraphQLTypes["order_by"],
	max?: GraphQLTypes["mempool_double_baking_max_order_by"],
	min?: GraphQLTypes["mempool_double_baking_min_order_by"],
	stddev?: GraphQLTypes["mempool_double_baking_stddev_order_by"],
	stddev_pop?: GraphQLTypes["mempool_double_baking_stddev_pop_order_by"],
	stddev_samp?: GraphQLTypes["mempool_double_baking_stddev_samp_order_by"],
	sum?: GraphQLTypes["mempool_double_baking_sum_order_by"],
	var_pop?: GraphQLTypes["mempool_double_baking_var_pop_order_by"],
	var_samp?: GraphQLTypes["mempool_double_baking_var_samp_order_by"],
	variance?: GraphQLTypes["mempool_double_baking_variance_order_by"]
};
	/** aggregate avg on columns */
["mempool_double_baking_avg_fields"]: {
	__typename: "mempool_double_baking_avg_fields",
	bh_1_level?: number,
	bh_1_priority?: number,
	bh_1_proto?: number,
	bh_1_validation_pass?: number,
	bh_2_level?: number,
	bh_2_priority?: number,
	bh_2_proto?: number,
	bh_2_validation_pass?: number,
	created_at?: number,
	expiration_level?: number,
	level?: number,
	updated_at?: number
};
	/** order by avg() on columns of table "mempool_double_baking" */
["mempool_double_baking_avg_order_by"]: {
		bh_1_level?: GraphQLTypes["order_by"],
	bh_1_priority?: GraphQLTypes["order_by"],
	bh_1_proto?: GraphQLTypes["order_by"],
	bh_1_validation_pass?: GraphQLTypes["order_by"],
	bh_2_level?: GraphQLTypes["order_by"],
	bh_2_priority?: GraphQLTypes["order_by"],
	bh_2_proto?: GraphQLTypes["order_by"],
	bh_2_validation_pass?: GraphQLTypes["order_by"],
	created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** Boolean expression to filter rows from the table "mempool_double_baking". All fields are combined with a logical 'AND'. */
["mempool_double_baking_bool_exp"]: {
		_and?: Array<GraphQLTypes["mempool_double_baking_bool_exp"] | undefined>,
	_not?: GraphQLTypes["mempool_double_baking_bool_exp"],
	_or?: Array<GraphQLTypes["mempool_double_baking_bool_exp"] | undefined>,
	bh_1_level?: GraphQLTypes["bigint_comparison_exp"],
	bh_1_priority?: GraphQLTypes["bigint_comparison_exp"],
	bh_1_proof_of_work_nonce?: GraphQLTypes["String_comparison_exp"],
	bh_1_proto?: GraphQLTypes["bigint_comparison_exp"],
	bh_1_validation_pass?: GraphQLTypes["bigint_comparison_exp"],
	bh_2_level?: GraphQLTypes["bigint_comparison_exp"],
	bh_2_priority?: GraphQLTypes["bigint_comparison_exp"],
	bh_2_proof_of_work_nonce?: GraphQLTypes["String_comparison_exp"],
	bh_2_proto?: GraphQLTypes["bigint_comparison_exp"],
	bh_2_validation_pass?: GraphQLTypes["bigint_comparison_exp"],
	branch?: GraphQLTypes["String_comparison_exp"],
	created_at?: GraphQLTypes["bigint_comparison_exp"],
	errors?: GraphQLTypes["jsonb_comparison_exp"],
	expiration_level?: GraphQLTypes["bigint_comparison_exp"],
	hash?: GraphQLTypes["String_comparison_exp"],
	kind?: GraphQLTypes["String_comparison_exp"],
	level?: GraphQLTypes["bigint_comparison_exp"],
	network?: GraphQLTypes["String_comparison_exp"],
	signature?: GraphQLTypes["String_comparison_exp"],
	status?: GraphQLTypes["String_comparison_exp"],
	updated_at?: GraphQLTypes["bigint_comparison_exp"]
};
	/** aggregate max on columns */
["mempool_double_baking_max_fields"]: {
	__typename: "mempool_double_baking_max_fields",
	bh_1_level?: GraphQLTypes["bigint"],
	bh_1_priority?: GraphQLTypes["bigint"],
	bh_1_proof_of_work_nonce?: string,
	bh_1_proto?: GraphQLTypes["bigint"],
	bh_1_validation_pass?: GraphQLTypes["bigint"],
	bh_2_level?: GraphQLTypes["bigint"],
	bh_2_priority?: GraphQLTypes["bigint"],
	bh_2_proof_of_work_nonce?: string,
	bh_2_proto?: GraphQLTypes["bigint"],
	bh_2_validation_pass?: GraphQLTypes["bigint"],
	branch?: string,
	created_at?: GraphQLTypes["bigint"],
	expiration_level?: GraphQLTypes["bigint"],
	hash?: string,
	kind?: string,
	level?: GraphQLTypes["bigint"],
	network?: string,
	signature?: string,
	status?: string,
	updated_at?: GraphQLTypes["bigint"]
};
	/** order by max() on columns of table "mempool_double_baking" */
["mempool_double_baking_max_order_by"]: {
		bh_1_level?: GraphQLTypes["order_by"],
	bh_1_priority?: GraphQLTypes["order_by"],
	bh_1_proof_of_work_nonce?: GraphQLTypes["order_by"],
	bh_1_proto?: GraphQLTypes["order_by"],
	bh_1_validation_pass?: GraphQLTypes["order_by"],
	bh_2_level?: GraphQLTypes["order_by"],
	bh_2_priority?: GraphQLTypes["order_by"],
	bh_2_proof_of_work_nonce?: GraphQLTypes["order_by"],
	bh_2_proto?: GraphQLTypes["order_by"],
	bh_2_validation_pass?: GraphQLTypes["order_by"],
	branch?: GraphQLTypes["order_by"],
	created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	hash?: GraphQLTypes["order_by"],
	kind?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	network?: GraphQLTypes["order_by"],
	signature?: GraphQLTypes["order_by"],
	status?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate min on columns */
["mempool_double_baking_min_fields"]: {
	__typename: "mempool_double_baking_min_fields",
	bh_1_level?: GraphQLTypes["bigint"],
	bh_1_priority?: GraphQLTypes["bigint"],
	bh_1_proof_of_work_nonce?: string,
	bh_1_proto?: GraphQLTypes["bigint"],
	bh_1_validation_pass?: GraphQLTypes["bigint"],
	bh_2_level?: GraphQLTypes["bigint"],
	bh_2_priority?: GraphQLTypes["bigint"],
	bh_2_proof_of_work_nonce?: string,
	bh_2_proto?: GraphQLTypes["bigint"],
	bh_2_validation_pass?: GraphQLTypes["bigint"],
	branch?: string,
	created_at?: GraphQLTypes["bigint"],
	expiration_level?: GraphQLTypes["bigint"],
	hash?: string,
	kind?: string,
	level?: GraphQLTypes["bigint"],
	network?: string,
	signature?: string,
	status?: string,
	updated_at?: GraphQLTypes["bigint"]
};
	/** order by min() on columns of table "mempool_double_baking" */
["mempool_double_baking_min_order_by"]: {
		bh_1_level?: GraphQLTypes["order_by"],
	bh_1_priority?: GraphQLTypes["order_by"],
	bh_1_proof_of_work_nonce?: GraphQLTypes["order_by"],
	bh_1_proto?: GraphQLTypes["order_by"],
	bh_1_validation_pass?: GraphQLTypes["order_by"],
	bh_2_level?: GraphQLTypes["order_by"],
	bh_2_priority?: GraphQLTypes["order_by"],
	bh_2_proof_of_work_nonce?: GraphQLTypes["order_by"],
	bh_2_proto?: GraphQLTypes["order_by"],
	bh_2_validation_pass?: GraphQLTypes["order_by"],
	branch?: GraphQLTypes["order_by"],
	created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	hash?: GraphQLTypes["order_by"],
	kind?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	network?: GraphQLTypes["order_by"],
	signature?: GraphQLTypes["order_by"],
	status?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** ordering options when selecting data from "mempool_double_baking" */
["mempool_double_baking_order_by"]: {
		bh_1_level?: GraphQLTypes["order_by"],
	bh_1_priority?: GraphQLTypes["order_by"],
	bh_1_proof_of_work_nonce?: GraphQLTypes["order_by"],
	bh_1_proto?: GraphQLTypes["order_by"],
	bh_1_validation_pass?: GraphQLTypes["order_by"],
	bh_2_level?: GraphQLTypes["order_by"],
	bh_2_priority?: GraphQLTypes["order_by"],
	bh_2_proof_of_work_nonce?: GraphQLTypes["order_by"],
	bh_2_proto?: GraphQLTypes["order_by"],
	bh_2_validation_pass?: GraphQLTypes["order_by"],
	branch?: GraphQLTypes["order_by"],
	created_at?: GraphQLTypes["order_by"],
	errors?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	hash?: GraphQLTypes["order_by"],
	kind?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	network?: GraphQLTypes["order_by"],
	signature?: GraphQLTypes["order_by"],
	status?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** primary key columns input for table: "mempool_double_baking" */
["mempool_double_baking_pk_columns_input"]: {
		hash: string,
	network: string
};
	/** select columns of table "mempool_double_baking" */
["mempool_double_baking_select_column"]: mempool_double_baking_select_column;
	/** aggregate stddev on columns */
["mempool_double_baking_stddev_fields"]: {
	__typename: "mempool_double_baking_stddev_fields",
	bh_1_level?: number,
	bh_1_priority?: number,
	bh_1_proto?: number,
	bh_1_validation_pass?: number,
	bh_2_level?: number,
	bh_2_priority?: number,
	bh_2_proto?: number,
	bh_2_validation_pass?: number,
	created_at?: number,
	expiration_level?: number,
	level?: number,
	updated_at?: number
};
	/** order by stddev() on columns of table "mempool_double_baking" */
["mempool_double_baking_stddev_order_by"]: {
		bh_1_level?: GraphQLTypes["order_by"],
	bh_1_priority?: GraphQLTypes["order_by"],
	bh_1_proto?: GraphQLTypes["order_by"],
	bh_1_validation_pass?: GraphQLTypes["order_by"],
	bh_2_level?: GraphQLTypes["order_by"],
	bh_2_priority?: GraphQLTypes["order_by"],
	bh_2_proto?: GraphQLTypes["order_by"],
	bh_2_validation_pass?: GraphQLTypes["order_by"],
	created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate stddev_pop on columns */
["mempool_double_baking_stddev_pop_fields"]: {
	__typename: "mempool_double_baking_stddev_pop_fields",
	bh_1_level?: number,
	bh_1_priority?: number,
	bh_1_proto?: number,
	bh_1_validation_pass?: number,
	bh_2_level?: number,
	bh_2_priority?: number,
	bh_2_proto?: number,
	bh_2_validation_pass?: number,
	created_at?: number,
	expiration_level?: number,
	level?: number,
	updated_at?: number
};
	/** order by stddev_pop() on columns of table "mempool_double_baking" */
["mempool_double_baking_stddev_pop_order_by"]: {
		bh_1_level?: GraphQLTypes["order_by"],
	bh_1_priority?: GraphQLTypes["order_by"],
	bh_1_proto?: GraphQLTypes["order_by"],
	bh_1_validation_pass?: GraphQLTypes["order_by"],
	bh_2_level?: GraphQLTypes["order_by"],
	bh_2_priority?: GraphQLTypes["order_by"],
	bh_2_proto?: GraphQLTypes["order_by"],
	bh_2_validation_pass?: GraphQLTypes["order_by"],
	created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate stddev_samp on columns */
["mempool_double_baking_stddev_samp_fields"]: {
	__typename: "mempool_double_baking_stddev_samp_fields",
	bh_1_level?: number,
	bh_1_priority?: number,
	bh_1_proto?: number,
	bh_1_validation_pass?: number,
	bh_2_level?: number,
	bh_2_priority?: number,
	bh_2_proto?: number,
	bh_2_validation_pass?: number,
	created_at?: number,
	expiration_level?: number,
	level?: number,
	updated_at?: number
};
	/** order by stddev_samp() on columns of table "mempool_double_baking" */
["mempool_double_baking_stddev_samp_order_by"]: {
		bh_1_level?: GraphQLTypes["order_by"],
	bh_1_priority?: GraphQLTypes["order_by"],
	bh_1_proto?: GraphQLTypes["order_by"],
	bh_1_validation_pass?: GraphQLTypes["order_by"],
	bh_2_level?: GraphQLTypes["order_by"],
	bh_2_priority?: GraphQLTypes["order_by"],
	bh_2_proto?: GraphQLTypes["order_by"],
	bh_2_validation_pass?: GraphQLTypes["order_by"],
	created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate sum on columns */
["mempool_double_baking_sum_fields"]: {
	__typename: "mempool_double_baking_sum_fields",
	bh_1_level?: GraphQLTypes["bigint"],
	bh_1_priority?: GraphQLTypes["bigint"],
	bh_1_proto?: GraphQLTypes["bigint"],
	bh_1_validation_pass?: GraphQLTypes["bigint"],
	bh_2_level?: GraphQLTypes["bigint"],
	bh_2_priority?: GraphQLTypes["bigint"],
	bh_2_proto?: GraphQLTypes["bigint"],
	bh_2_validation_pass?: GraphQLTypes["bigint"],
	created_at?: GraphQLTypes["bigint"],
	expiration_level?: GraphQLTypes["bigint"],
	level?: GraphQLTypes["bigint"],
	updated_at?: GraphQLTypes["bigint"]
};
	/** order by sum() on columns of table "mempool_double_baking" */
["mempool_double_baking_sum_order_by"]: {
		bh_1_level?: GraphQLTypes["order_by"],
	bh_1_priority?: GraphQLTypes["order_by"],
	bh_1_proto?: GraphQLTypes["order_by"],
	bh_1_validation_pass?: GraphQLTypes["order_by"],
	bh_2_level?: GraphQLTypes["order_by"],
	bh_2_priority?: GraphQLTypes["order_by"],
	bh_2_proto?: GraphQLTypes["order_by"],
	bh_2_validation_pass?: GraphQLTypes["order_by"],
	created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate var_pop on columns */
["mempool_double_baking_var_pop_fields"]: {
	__typename: "mempool_double_baking_var_pop_fields",
	bh_1_level?: number,
	bh_1_priority?: number,
	bh_1_proto?: number,
	bh_1_validation_pass?: number,
	bh_2_level?: number,
	bh_2_priority?: number,
	bh_2_proto?: number,
	bh_2_validation_pass?: number,
	created_at?: number,
	expiration_level?: number,
	level?: number,
	updated_at?: number
};
	/** order by var_pop() on columns of table "mempool_double_baking" */
["mempool_double_baking_var_pop_order_by"]: {
		bh_1_level?: GraphQLTypes["order_by"],
	bh_1_priority?: GraphQLTypes["order_by"],
	bh_1_proto?: GraphQLTypes["order_by"],
	bh_1_validation_pass?: GraphQLTypes["order_by"],
	bh_2_level?: GraphQLTypes["order_by"],
	bh_2_priority?: GraphQLTypes["order_by"],
	bh_2_proto?: GraphQLTypes["order_by"],
	bh_2_validation_pass?: GraphQLTypes["order_by"],
	created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate var_samp on columns */
["mempool_double_baking_var_samp_fields"]: {
	__typename: "mempool_double_baking_var_samp_fields",
	bh_1_level?: number,
	bh_1_priority?: number,
	bh_1_proto?: number,
	bh_1_validation_pass?: number,
	bh_2_level?: number,
	bh_2_priority?: number,
	bh_2_proto?: number,
	bh_2_validation_pass?: number,
	created_at?: number,
	expiration_level?: number,
	level?: number,
	updated_at?: number
};
	/** order by var_samp() on columns of table "mempool_double_baking" */
["mempool_double_baking_var_samp_order_by"]: {
		bh_1_level?: GraphQLTypes["order_by"],
	bh_1_priority?: GraphQLTypes["order_by"],
	bh_1_proto?: GraphQLTypes["order_by"],
	bh_1_validation_pass?: GraphQLTypes["order_by"],
	bh_2_level?: GraphQLTypes["order_by"],
	bh_2_priority?: GraphQLTypes["order_by"],
	bh_2_proto?: GraphQLTypes["order_by"],
	bh_2_validation_pass?: GraphQLTypes["order_by"],
	created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate variance on columns */
["mempool_double_baking_variance_fields"]: {
	__typename: "mempool_double_baking_variance_fields",
	bh_1_level?: number,
	bh_1_priority?: number,
	bh_1_proto?: number,
	bh_1_validation_pass?: number,
	bh_2_level?: number,
	bh_2_priority?: number,
	bh_2_proto?: number,
	bh_2_validation_pass?: number,
	created_at?: number,
	expiration_level?: number,
	level?: number,
	updated_at?: number
};
	/** order by variance() on columns of table "mempool_double_baking" */
["mempool_double_baking_variance_order_by"]: {
		bh_1_level?: GraphQLTypes["order_by"],
	bh_1_priority?: GraphQLTypes["order_by"],
	bh_1_proto?: GraphQLTypes["order_by"],
	bh_1_validation_pass?: GraphQLTypes["order_by"],
	bh_2_level?: GraphQLTypes["order_by"],
	bh_2_priority?: GraphQLTypes["order_by"],
	bh_2_proto?: GraphQLTypes["order_by"],
	bh_2_validation_pass?: GraphQLTypes["order_by"],
	created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** columns and relationships of "mempool_double_endorsing" */
["mempool_double_endorsing"]: {
	__typename: "mempool_double_endorsing",
	branch?: string,
	created_at?: GraphQLTypes["bigint"],
	errors?: GraphQLTypes["jsonb"],
	expiration_level?: GraphQLTypes["bigint"],
	hash: string,
	kind?: string,
	level?: GraphQLTypes["bigint"],
	network: string,
	op_1_kind?: string,
	op_1_level?: GraphQLTypes["bigint"],
	op_2_kind?: string,
	op_2_level?: GraphQLTypes["bigint"],
	signature?: string,
	status?: string,
	updated_at?: GraphQLTypes["bigint"]
};
	/** aggregated selection of "mempool_double_endorsing" */
["mempool_double_endorsing_aggregate"]: {
	__typename: "mempool_double_endorsing_aggregate",
	aggregate?: GraphQLTypes["mempool_double_endorsing_aggregate_fields"],
	nodes: Array<GraphQLTypes["mempool_double_endorsing"]>
};
	/** aggregate fields of "mempool_double_endorsing" */
["mempool_double_endorsing_aggregate_fields"]: {
	__typename: "mempool_double_endorsing_aggregate_fields",
	avg?: GraphQLTypes["mempool_double_endorsing_avg_fields"],
	count?: number,
	max?: GraphQLTypes["mempool_double_endorsing_max_fields"],
	min?: GraphQLTypes["mempool_double_endorsing_min_fields"],
	stddev?: GraphQLTypes["mempool_double_endorsing_stddev_fields"],
	stddev_pop?: GraphQLTypes["mempool_double_endorsing_stddev_pop_fields"],
	stddev_samp?: GraphQLTypes["mempool_double_endorsing_stddev_samp_fields"],
	sum?: GraphQLTypes["mempool_double_endorsing_sum_fields"],
	var_pop?: GraphQLTypes["mempool_double_endorsing_var_pop_fields"],
	var_samp?: GraphQLTypes["mempool_double_endorsing_var_samp_fields"],
	variance?: GraphQLTypes["mempool_double_endorsing_variance_fields"]
};
	/** order by aggregate values of table "mempool_double_endorsing" */
["mempool_double_endorsing_aggregate_order_by"]: {
		avg?: GraphQLTypes["mempool_double_endorsing_avg_order_by"],
	count?: GraphQLTypes["order_by"],
	max?: GraphQLTypes["mempool_double_endorsing_max_order_by"],
	min?: GraphQLTypes["mempool_double_endorsing_min_order_by"],
	stddev?: GraphQLTypes["mempool_double_endorsing_stddev_order_by"],
	stddev_pop?: GraphQLTypes["mempool_double_endorsing_stddev_pop_order_by"],
	stddev_samp?: GraphQLTypes["mempool_double_endorsing_stddev_samp_order_by"],
	sum?: GraphQLTypes["mempool_double_endorsing_sum_order_by"],
	var_pop?: GraphQLTypes["mempool_double_endorsing_var_pop_order_by"],
	var_samp?: GraphQLTypes["mempool_double_endorsing_var_samp_order_by"],
	variance?: GraphQLTypes["mempool_double_endorsing_variance_order_by"]
};
	/** aggregate avg on columns */
["mempool_double_endorsing_avg_fields"]: {
	__typename: "mempool_double_endorsing_avg_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	op_1_level?: number,
	op_2_level?: number,
	updated_at?: number
};
	/** order by avg() on columns of table "mempool_double_endorsing" */
["mempool_double_endorsing_avg_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	op_1_level?: GraphQLTypes["order_by"],
	op_2_level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** Boolean expression to filter rows from the table "mempool_double_endorsing". All fields are combined with a logical 'AND'. */
["mempool_double_endorsing_bool_exp"]: {
		_and?: Array<GraphQLTypes["mempool_double_endorsing_bool_exp"] | undefined>,
	_not?: GraphQLTypes["mempool_double_endorsing_bool_exp"],
	_or?: Array<GraphQLTypes["mempool_double_endorsing_bool_exp"] | undefined>,
	branch?: GraphQLTypes["String_comparison_exp"],
	created_at?: GraphQLTypes["bigint_comparison_exp"],
	errors?: GraphQLTypes["jsonb_comparison_exp"],
	expiration_level?: GraphQLTypes["bigint_comparison_exp"],
	hash?: GraphQLTypes["String_comparison_exp"],
	kind?: GraphQLTypes["String_comparison_exp"],
	level?: GraphQLTypes["bigint_comparison_exp"],
	network?: GraphQLTypes["String_comparison_exp"],
	op_1_kind?: GraphQLTypes["String_comparison_exp"],
	op_1_level?: GraphQLTypes["bigint_comparison_exp"],
	op_2_kind?: GraphQLTypes["String_comparison_exp"],
	op_2_level?: GraphQLTypes["bigint_comparison_exp"],
	signature?: GraphQLTypes["String_comparison_exp"],
	status?: GraphQLTypes["String_comparison_exp"],
	updated_at?: GraphQLTypes["bigint_comparison_exp"]
};
	/** aggregate max on columns */
["mempool_double_endorsing_max_fields"]: {
	__typename: "mempool_double_endorsing_max_fields",
	branch?: string,
	created_at?: GraphQLTypes["bigint"],
	expiration_level?: GraphQLTypes["bigint"],
	hash?: string,
	kind?: string,
	level?: GraphQLTypes["bigint"],
	network?: string,
	op_1_kind?: string,
	op_1_level?: GraphQLTypes["bigint"],
	op_2_kind?: string,
	op_2_level?: GraphQLTypes["bigint"],
	signature?: string,
	status?: string,
	updated_at?: GraphQLTypes["bigint"]
};
	/** order by max() on columns of table "mempool_double_endorsing" */
["mempool_double_endorsing_max_order_by"]: {
		branch?: GraphQLTypes["order_by"],
	created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	hash?: GraphQLTypes["order_by"],
	kind?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	network?: GraphQLTypes["order_by"],
	op_1_kind?: GraphQLTypes["order_by"],
	op_1_level?: GraphQLTypes["order_by"],
	op_2_kind?: GraphQLTypes["order_by"],
	op_2_level?: GraphQLTypes["order_by"],
	signature?: GraphQLTypes["order_by"],
	status?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate min on columns */
["mempool_double_endorsing_min_fields"]: {
	__typename: "mempool_double_endorsing_min_fields",
	branch?: string,
	created_at?: GraphQLTypes["bigint"],
	expiration_level?: GraphQLTypes["bigint"],
	hash?: string,
	kind?: string,
	level?: GraphQLTypes["bigint"],
	network?: string,
	op_1_kind?: string,
	op_1_level?: GraphQLTypes["bigint"],
	op_2_kind?: string,
	op_2_level?: GraphQLTypes["bigint"],
	signature?: string,
	status?: string,
	updated_at?: GraphQLTypes["bigint"]
};
	/** order by min() on columns of table "mempool_double_endorsing" */
["mempool_double_endorsing_min_order_by"]: {
		branch?: GraphQLTypes["order_by"],
	created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	hash?: GraphQLTypes["order_by"],
	kind?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	network?: GraphQLTypes["order_by"],
	op_1_kind?: GraphQLTypes["order_by"],
	op_1_level?: GraphQLTypes["order_by"],
	op_2_kind?: GraphQLTypes["order_by"],
	op_2_level?: GraphQLTypes["order_by"],
	signature?: GraphQLTypes["order_by"],
	status?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** ordering options when selecting data from "mempool_double_endorsing" */
["mempool_double_endorsing_order_by"]: {
		branch?: GraphQLTypes["order_by"],
	created_at?: GraphQLTypes["order_by"],
	errors?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	hash?: GraphQLTypes["order_by"],
	kind?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	network?: GraphQLTypes["order_by"],
	op_1_kind?: GraphQLTypes["order_by"],
	op_1_level?: GraphQLTypes["order_by"],
	op_2_kind?: GraphQLTypes["order_by"],
	op_2_level?: GraphQLTypes["order_by"],
	signature?: GraphQLTypes["order_by"],
	status?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** primary key columns input for table: "mempool_double_endorsing" */
["mempool_double_endorsing_pk_columns_input"]: {
		hash: string,
	network: string
};
	/** select columns of table "mempool_double_endorsing" */
["mempool_double_endorsing_select_column"]: mempool_double_endorsing_select_column;
	/** aggregate stddev on columns */
["mempool_double_endorsing_stddev_fields"]: {
	__typename: "mempool_double_endorsing_stddev_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	op_1_level?: number,
	op_2_level?: number,
	updated_at?: number
};
	/** order by stddev() on columns of table "mempool_double_endorsing" */
["mempool_double_endorsing_stddev_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	op_1_level?: GraphQLTypes["order_by"],
	op_2_level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate stddev_pop on columns */
["mempool_double_endorsing_stddev_pop_fields"]: {
	__typename: "mempool_double_endorsing_stddev_pop_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	op_1_level?: number,
	op_2_level?: number,
	updated_at?: number
};
	/** order by stddev_pop() on columns of table "mempool_double_endorsing" */
["mempool_double_endorsing_stddev_pop_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	op_1_level?: GraphQLTypes["order_by"],
	op_2_level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate stddev_samp on columns */
["mempool_double_endorsing_stddev_samp_fields"]: {
	__typename: "mempool_double_endorsing_stddev_samp_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	op_1_level?: number,
	op_2_level?: number,
	updated_at?: number
};
	/** order by stddev_samp() on columns of table "mempool_double_endorsing" */
["mempool_double_endorsing_stddev_samp_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	op_1_level?: GraphQLTypes["order_by"],
	op_2_level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate sum on columns */
["mempool_double_endorsing_sum_fields"]: {
	__typename: "mempool_double_endorsing_sum_fields",
	created_at?: GraphQLTypes["bigint"],
	expiration_level?: GraphQLTypes["bigint"],
	level?: GraphQLTypes["bigint"],
	op_1_level?: GraphQLTypes["bigint"],
	op_2_level?: GraphQLTypes["bigint"],
	updated_at?: GraphQLTypes["bigint"]
};
	/** order by sum() on columns of table "mempool_double_endorsing" */
["mempool_double_endorsing_sum_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	op_1_level?: GraphQLTypes["order_by"],
	op_2_level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate var_pop on columns */
["mempool_double_endorsing_var_pop_fields"]: {
	__typename: "mempool_double_endorsing_var_pop_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	op_1_level?: number,
	op_2_level?: number,
	updated_at?: number
};
	/** order by var_pop() on columns of table "mempool_double_endorsing" */
["mempool_double_endorsing_var_pop_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	op_1_level?: GraphQLTypes["order_by"],
	op_2_level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate var_samp on columns */
["mempool_double_endorsing_var_samp_fields"]: {
	__typename: "mempool_double_endorsing_var_samp_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	op_1_level?: number,
	op_2_level?: number,
	updated_at?: number
};
	/** order by var_samp() on columns of table "mempool_double_endorsing" */
["mempool_double_endorsing_var_samp_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	op_1_level?: GraphQLTypes["order_by"],
	op_2_level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate variance on columns */
["mempool_double_endorsing_variance_fields"]: {
	__typename: "mempool_double_endorsing_variance_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	op_1_level?: number,
	op_2_level?: number,
	updated_at?: number
};
	/** order by variance() on columns of table "mempool_double_endorsing" */
["mempool_double_endorsing_variance_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	op_1_level?: GraphQLTypes["order_by"],
	op_2_level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** columns and relationships of "mempool_endorsement" */
["mempool_endorsement"]: {
	__typename: "mempool_endorsement",
	baker?: string,
	branch?: string,
	created_at?: GraphQLTypes["bigint"],
	errors?: GraphQLTypes["jsonb"],
	expiration_level?: GraphQLTypes["bigint"],
	hash: string,
	kind?: string,
	level?: GraphQLTypes["bigint"],
	network: string,
	signature?: string,
	status?: string,
	updated_at?: GraphQLTypes["bigint"]
};
	/** aggregated selection of "mempool_endorsement" */
["mempool_endorsement_aggregate"]: {
	__typename: "mempool_endorsement_aggregate",
	aggregate?: GraphQLTypes["mempool_endorsement_aggregate_fields"],
	nodes: Array<GraphQLTypes["mempool_endorsement"]>
};
	/** aggregate fields of "mempool_endorsement" */
["mempool_endorsement_aggregate_fields"]: {
	__typename: "mempool_endorsement_aggregate_fields",
	avg?: GraphQLTypes["mempool_endorsement_avg_fields"],
	count?: number,
	max?: GraphQLTypes["mempool_endorsement_max_fields"],
	min?: GraphQLTypes["mempool_endorsement_min_fields"],
	stddev?: GraphQLTypes["mempool_endorsement_stddev_fields"],
	stddev_pop?: GraphQLTypes["mempool_endorsement_stddev_pop_fields"],
	stddev_samp?: GraphQLTypes["mempool_endorsement_stddev_samp_fields"],
	sum?: GraphQLTypes["mempool_endorsement_sum_fields"],
	var_pop?: GraphQLTypes["mempool_endorsement_var_pop_fields"],
	var_samp?: GraphQLTypes["mempool_endorsement_var_samp_fields"],
	variance?: GraphQLTypes["mempool_endorsement_variance_fields"]
};
	/** order by aggregate values of table "mempool_endorsement" */
["mempool_endorsement_aggregate_order_by"]: {
		avg?: GraphQLTypes["mempool_endorsement_avg_order_by"],
	count?: GraphQLTypes["order_by"],
	max?: GraphQLTypes["mempool_endorsement_max_order_by"],
	min?: GraphQLTypes["mempool_endorsement_min_order_by"],
	stddev?: GraphQLTypes["mempool_endorsement_stddev_order_by"],
	stddev_pop?: GraphQLTypes["mempool_endorsement_stddev_pop_order_by"],
	stddev_samp?: GraphQLTypes["mempool_endorsement_stddev_samp_order_by"],
	sum?: GraphQLTypes["mempool_endorsement_sum_order_by"],
	var_pop?: GraphQLTypes["mempool_endorsement_var_pop_order_by"],
	var_samp?: GraphQLTypes["mempool_endorsement_var_samp_order_by"],
	variance?: GraphQLTypes["mempool_endorsement_variance_order_by"]
};
	/** aggregate avg on columns */
["mempool_endorsement_avg_fields"]: {
	__typename: "mempool_endorsement_avg_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	updated_at?: number
};
	/** order by avg() on columns of table "mempool_endorsement" */
["mempool_endorsement_avg_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** Boolean expression to filter rows from the table "mempool_endorsement". All fields are combined with a logical 'AND'. */
["mempool_endorsement_bool_exp"]: {
		_and?: Array<GraphQLTypes["mempool_endorsement_bool_exp"] | undefined>,
	_not?: GraphQLTypes["mempool_endorsement_bool_exp"],
	_or?: Array<GraphQLTypes["mempool_endorsement_bool_exp"] | undefined>,
	baker?: GraphQLTypes["String_comparison_exp"],
	branch?: GraphQLTypes["String_comparison_exp"],
	created_at?: GraphQLTypes["bigint_comparison_exp"],
	errors?: GraphQLTypes["jsonb_comparison_exp"],
	expiration_level?: GraphQLTypes["bigint_comparison_exp"],
	hash?: GraphQLTypes["String_comparison_exp"],
	kind?: GraphQLTypes["String_comparison_exp"],
	level?: GraphQLTypes["bigint_comparison_exp"],
	network?: GraphQLTypes["String_comparison_exp"],
	signature?: GraphQLTypes["String_comparison_exp"],
	status?: GraphQLTypes["String_comparison_exp"],
	updated_at?: GraphQLTypes["bigint_comparison_exp"]
};
	/** aggregate max on columns */
["mempool_endorsement_max_fields"]: {
	__typename: "mempool_endorsement_max_fields",
	baker?: string,
	branch?: string,
	created_at?: GraphQLTypes["bigint"],
	expiration_level?: GraphQLTypes["bigint"],
	hash?: string,
	kind?: string,
	level?: GraphQLTypes["bigint"],
	network?: string,
	signature?: string,
	status?: string,
	updated_at?: GraphQLTypes["bigint"]
};
	/** order by max() on columns of table "mempool_endorsement" */
["mempool_endorsement_max_order_by"]: {
		baker?: GraphQLTypes["order_by"],
	branch?: GraphQLTypes["order_by"],
	created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	hash?: GraphQLTypes["order_by"],
	kind?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	network?: GraphQLTypes["order_by"],
	signature?: GraphQLTypes["order_by"],
	status?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate min on columns */
["mempool_endorsement_min_fields"]: {
	__typename: "mempool_endorsement_min_fields",
	baker?: string,
	branch?: string,
	created_at?: GraphQLTypes["bigint"],
	expiration_level?: GraphQLTypes["bigint"],
	hash?: string,
	kind?: string,
	level?: GraphQLTypes["bigint"],
	network?: string,
	signature?: string,
	status?: string,
	updated_at?: GraphQLTypes["bigint"]
};
	/** order by min() on columns of table "mempool_endorsement" */
["mempool_endorsement_min_order_by"]: {
		baker?: GraphQLTypes["order_by"],
	branch?: GraphQLTypes["order_by"],
	created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	hash?: GraphQLTypes["order_by"],
	kind?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	network?: GraphQLTypes["order_by"],
	signature?: GraphQLTypes["order_by"],
	status?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** ordering options when selecting data from "mempool_endorsement" */
["mempool_endorsement_order_by"]: {
		baker?: GraphQLTypes["order_by"],
	branch?: GraphQLTypes["order_by"],
	created_at?: GraphQLTypes["order_by"],
	errors?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	hash?: GraphQLTypes["order_by"],
	kind?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	network?: GraphQLTypes["order_by"],
	signature?: GraphQLTypes["order_by"],
	status?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** primary key columns input for table: "mempool_endorsement" */
["mempool_endorsement_pk_columns_input"]: {
		hash: string,
	network: string
};
	/** select columns of table "mempool_endorsement" */
["mempool_endorsement_select_column"]: mempool_endorsement_select_column;
	/** aggregate stddev on columns */
["mempool_endorsement_stddev_fields"]: {
	__typename: "mempool_endorsement_stddev_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	updated_at?: number
};
	/** order by stddev() on columns of table "mempool_endorsement" */
["mempool_endorsement_stddev_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate stddev_pop on columns */
["mempool_endorsement_stddev_pop_fields"]: {
	__typename: "mempool_endorsement_stddev_pop_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	updated_at?: number
};
	/** order by stddev_pop() on columns of table "mempool_endorsement" */
["mempool_endorsement_stddev_pop_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate stddev_samp on columns */
["mempool_endorsement_stddev_samp_fields"]: {
	__typename: "mempool_endorsement_stddev_samp_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	updated_at?: number
};
	/** order by stddev_samp() on columns of table "mempool_endorsement" */
["mempool_endorsement_stddev_samp_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate sum on columns */
["mempool_endorsement_sum_fields"]: {
	__typename: "mempool_endorsement_sum_fields",
	created_at?: GraphQLTypes["bigint"],
	expiration_level?: GraphQLTypes["bigint"],
	level?: GraphQLTypes["bigint"],
	updated_at?: GraphQLTypes["bigint"]
};
	/** order by sum() on columns of table "mempool_endorsement" */
["mempool_endorsement_sum_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate var_pop on columns */
["mempool_endorsement_var_pop_fields"]: {
	__typename: "mempool_endorsement_var_pop_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	updated_at?: number
};
	/** order by var_pop() on columns of table "mempool_endorsement" */
["mempool_endorsement_var_pop_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate var_samp on columns */
["mempool_endorsement_var_samp_fields"]: {
	__typename: "mempool_endorsement_var_samp_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	updated_at?: number
};
	/** order by var_samp() on columns of table "mempool_endorsement" */
["mempool_endorsement_var_samp_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate variance on columns */
["mempool_endorsement_variance_fields"]: {
	__typename: "mempool_endorsement_variance_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	updated_at?: number
};
	/** order by variance() on columns of table "mempool_endorsement" */
["mempool_endorsement_variance_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** columns and relationships of "mempool_nonce_revelation" */
["mempool_nonce_revelation"]: {
	__typename: "mempool_nonce_revelation",
	branch?: string,
	created_at?: GraphQLTypes["bigint"],
	errors?: GraphQLTypes["jsonb"],
	expiration_level?: GraphQLTypes["bigint"],
	hash: string,
	kind?: string,
	level?: GraphQLTypes["bigint"],
	network: string,
	nonce?: string,
	signature?: string,
	status?: string,
	updated_at?: GraphQLTypes["bigint"]
};
	/** aggregated selection of "mempool_nonce_revelation" */
["mempool_nonce_revelation_aggregate"]: {
	__typename: "mempool_nonce_revelation_aggregate",
	aggregate?: GraphQLTypes["mempool_nonce_revelation_aggregate_fields"],
	nodes: Array<GraphQLTypes["mempool_nonce_revelation"]>
};
	/** aggregate fields of "mempool_nonce_revelation" */
["mempool_nonce_revelation_aggregate_fields"]: {
	__typename: "mempool_nonce_revelation_aggregate_fields",
	avg?: GraphQLTypes["mempool_nonce_revelation_avg_fields"],
	count?: number,
	max?: GraphQLTypes["mempool_nonce_revelation_max_fields"],
	min?: GraphQLTypes["mempool_nonce_revelation_min_fields"],
	stddev?: GraphQLTypes["mempool_nonce_revelation_stddev_fields"],
	stddev_pop?: GraphQLTypes["mempool_nonce_revelation_stddev_pop_fields"],
	stddev_samp?: GraphQLTypes["mempool_nonce_revelation_stddev_samp_fields"],
	sum?: GraphQLTypes["mempool_nonce_revelation_sum_fields"],
	var_pop?: GraphQLTypes["mempool_nonce_revelation_var_pop_fields"],
	var_samp?: GraphQLTypes["mempool_nonce_revelation_var_samp_fields"],
	variance?: GraphQLTypes["mempool_nonce_revelation_variance_fields"]
};
	/** order by aggregate values of table "mempool_nonce_revelation" */
["mempool_nonce_revelation_aggregate_order_by"]: {
		avg?: GraphQLTypes["mempool_nonce_revelation_avg_order_by"],
	count?: GraphQLTypes["order_by"],
	max?: GraphQLTypes["mempool_nonce_revelation_max_order_by"],
	min?: GraphQLTypes["mempool_nonce_revelation_min_order_by"],
	stddev?: GraphQLTypes["mempool_nonce_revelation_stddev_order_by"],
	stddev_pop?: GraphQLTypes["mempool_nonce_revelation_stddev_pop_order_by"],
	stddev_samp?: GraphQLTypes["mempool_nonce_revelation_stddev_samp_order_by"],
	sum?: GraphQLTypes["mempool_nonce_revelation_sum_order_by"],
	var_pop?: GraphQLTypes["mempool_nonce_revelation_var_pop_order_by"],
	var_samp?: GraphQLTypes["mempool_nonce_revelation_var_samp_order_by"],
	variance?: GraphQLTypes["mempool_nonce_revelation_variance_order_by"]
};
	/** aggregate avg on columns */
["mempool_nonce_revelation_avg_fields"]: {
	__typename: "mempool_nonce_revelation_avg_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	updated_at?: number
};
	/** order by avg() on columns of table "mempool_nonce_revelation" */
["mempool_nonce_revelation_avg_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** Boolean expression to filter rows from the table "mempool_nonce_revelation". All fields are combined with a logical 'AND'. */
["mempool_nonce_revelation_bool_exp"]: {
		_and?: Array<GraphQLTypes["mempool_nonce_revelation_bool_exp"] | undefined>,
	_not?: GraphQLTypes["mempool_nonce_revelation_bool_exp"],
	_or?: Array<GraphQLTypes["mempool_nonce_revelation_bool_exp"] | undefined>,
	branch?: GraphQLTypes["String_comparison_exp"],
	created_at?: GraphQLTypes["bigint_comparison_exp"],
	errors?: GraphQLTypes["jsonb_comparison_exp"],
	expiration_level?: GraphQLTypes["bigint_comparison_exp"],
	hash?: GraphQLTypes["String_comparison_exp"],
	kind?: GraphQLTypes["String_comparison_exp"],
	level?: GraphQLTypes["bigint_comparison_exp"],
	network?: GraphQLTypes["String_comparison_exp"],
	nonce?: GraphQLTypes["String_comparison_exp"],
	signature?: GraphQLTypes["String_comparison_exp"],
	status?: GraphQLTypes["String_comparison_exp"],
	updated_at?: GraphQLTypes["bigint_comparison_exp"]
};
	/** aggregate max on columns */
["mempool_nonce_revelation_max_fields"]: {
	__typename: "mempool_nonce_revelation_max_fields",
	branch?: string,
	created_at?: GraphQLTypes["bigint"],
	expiration_level?: GraphQLTypes["bigint"],
	hash?: string,
	kind?: string,
	level?: GraphQLTypes["bigint"],
	network?: string,
	nonce?: string,
	signature?: string,
	status?: string,
	updated_at?: GraphQLTypes["bigint"]
};
	/** order by max() on columns of table "mempool_nonce_revelation" */
["mempool_nonce_revelation_max_order_by"]: {
		branch?: GraphQLTypes["order_by"],
	created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	hash?: GraphQLTypes["order_by"],
	kind?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	network?: GraphQLTypes["order_by"],
	nonce?: GraphQLTypes["order_by"],
	signature?: GraphQLTypes["order_by"],
	status?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate min on columns */
["mempool_nonce_revelation_min_fields"]: {
	__typename: "mempool_nonce_revelation_min_fields",
	branch?: string,
	created_at?: GraphQLTypes["bigint"],
	expiration_level?: GraphQLTypes["bigint"],
	hash?: string,
	kind?: string,
	level?: GraphQLTypes["bigint"],
	network?: string,
	nonce?: string,
	signature?: string,
	status?: string,
	updated_at?: GraphQLTypes["bigint"]
};
	/** order by min() on columns of table "mempool_nonce_revelation" */
["mempool_nonce_revelation_min_order_by"]: {
		branch?: GraphQLTypes["order_by"],
	created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	hash?: GraphQLTypes["order_by"],
	kind?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	network?: GraphQLTypes["order_by"],
	nonce?: GraphQLTypes["order_by"],
	signature?: GraphQLTypes["order_by"],
	status?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** ordering options when selecting data from "mempool_nonce_revelation" */
["mempool_nonce_revelation_order_by"]: {
		branch?: GraphQLTypes["order_by"],
	created_at?: GraphQLTypes["order_by"],
	errors?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	hash?: GraphQLTypes["order_by"],
	kind?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	network?: GraphQLTypes["order_by"],
	nonce?: GraphQLTypes["order_by"],
	signature?: GraphQLTypes["order_by"],
	status?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** primary key columns input for table: "mempool_nonce_revelation" */
["mempool_nonce_revelation_pk_columns_input"]: {
		hash: string,
	network: string
};
	/** select columns of table "mempool_nonce_revelation" */
["mempool_nonce_revelation_select_column"]: mempool_nonce_revelation_select_column;
	/** aggregate stddev on columns */
["mempool_nonce_revelation_stddev_fields"]: {
	__typename: "mempool_nonce_revelation_stddev_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	updated_at?: number
};
	/** order by stddev() on columns of table "mempool_nonce_revelation" */
["mempool_nonce_revelation_stddev_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate stddev_pop on columns */
["mempool_nonce_revelation_stddev_pop_fields"]: {
	__typename: "mempool_nonce_revelation_stddev_pop_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	updated_at?: number
};
	/** order by stddev_pop() on columns of table "mempool_nonce_revelation" */
["mempool_nonce_revelation_stddev_pop_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate stddev_samp on columns */
["mempool_nonce_revelation_stddev_samp_fields"]: {
	__typename: "mempool_nonce_revelation_stddev_samp_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	updated_at?: number
};
	/** order by stddev_samp() on columns of table "mempool_nonce_revelation" */
["mempool_nonce_revelation_stddev_samp_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate sum on columns */
["mempool_nonce_revelation_sum_fields"]: {
	__typename: "mempool_nonce_revelation_sum_fields",
	created_at?: GraphQLTypes["bigint"],
	expiration_level?: GraphQLTypes["bigint"],
	level?: GraphQLTypes["bigint"],
	updated_at?: GraphQLTypes["bigint"]
};
	/** order by sum() on columns of table "mempool_nonce_revelation" */
["mempool_nonce_revelation_sum_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate var_pop on columns */
["mempool_nonce_revelation_var_pop_fields"]: {
	__typename: "mempool_nonce_revelation_var_pop_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	updated_at?: number
};
	/** order by var_pop() on columns of table "mempool_nonce_revelation" */
["mempool_nonce_revelation_var_pop_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate var_samp on columns */
["mempool_nonce_revelation_var_samp_fields"]: {
	__typename: "mempool_nonce_revelation_var_samp_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	updated_at?: number
};
	/** order by var_samp() on columns of table "mempool_nonce_revelation" */
["mempool_nonce_revelation_var_samp_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate variance on columns */
["mempool_nonce_revelation_variance_fields"]: {
	__typename: "mempool_nonce_revelation_variance_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	updated_at?: number
};
	/** order by variance() on columns of table "mempool_nonce_revelation" */
["mempool_nonce_revelation_variance_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** columns and relationships of "mempool_origination" */
["mempool_origination"]: {
	__typename: "mempool_origination",
	balance?: string,
	branch?: string,
	counter: string,
	created_at?: GraphQLTypes["bigint"],
	delegate?: string,
	errors?: GraphQLTypes["jsonb"],
	expiration_level?: GraphQLTypes["bigint"],
	fee?: string,
	gas_limit?: string,
	hash: string,
	kind?: string,
	level?: GraphQLTypes["bigint"],
	network: string,
	signature?: string,
	status?: string,
	storage?: GraphQLTypes["jsonb"],
	storage_limit?: string,
	updated_at?: GraphQLTypes["bigint"]
};
	/** aggregated selection of "mempool_origination" */
["mempool_origination_aggregate"]: {
	__typename: "mempool_origination_aggregate",
	aggregate?: GraphQLTypes["mempool_origination_aggregate_fields"],
	nodes: Array<GraphQLTypes["mempool_origination"]>
};
	/** aggregate fields of "mempool_origination" */
["mempool_origination_aggregate_fields"]: {
	__typename: "mempool_origination_aggregate_fields",
	avg?: GraphQLTypes["mempool_origination_avg_fields"],
	count?: number,
	max?: GraphQLTypes["mempool_origination_max_fields"],
	min?: GraphQLTypes["mempool_origination_min_fields"],
	stddev?: GraphQLTypes["mempool_origination_stddev_fields"],
	stddev_pop?: GraphQLTypes["mempool_origination_stddev_pop_fields"],
	stddev_samp?: GraphQLTypes["mempool_origination_stddev_samp_fields"],
	sum?: GraphQLTypes["mempool_origination_sum_fields"],
	var_pop?: GraphQLTypes["mempool_origination_var_pop_fields"],
	var_samp?: GraphQLTypes["mempool_origination_var_samp_fields"],
	variance?: GraphQLTypes["mempool_origination_variance_fields"]
};
	/** order by aggregate values of table "mempool_origination" */
["mempool_origination_aggregate_order_by"]: {
		avg?: GraphQLTypes["mempool_origination_avg_order_by"],
	count?: GraphQLTypes["order_by"],
	max?: GraphQLTypes["mempool_origination_max_order_by"],
	min?: GraphQLTypes["mempool_origination_min_order_by"],
	stddev?: GraphQLTypes["mempool_origination_stddev_order_by"],
	stddev_pop?: GraphQLTypes["mempool_origination_stddev_pop_order_by"],
	stddev_samp?: GraphQLTypes["mempool_origination_stddev_samp_order_by"],
	sum?: GraphQLTypes["mempool_origination_sum_order_by"],
	var_pop?: GraphQLTypes["mempool_origination_var_pop_order_by"],
	var_samp?: GraphQLTypes["mempool_origination_var_samp_order_by"],
	variance?: GraphQLTypes["mempool_origination_variance_order_by"]
};
	/** aggregate avg on columns */
["mempool_origination_avg_fields"]: {
	__typename: "mempool_origination_avg_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	updated_at?: number
};
	/** order by avg() on columns of table "mempool_origination" */
["mempool_origination_avg_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** Boolean expression to filter rows from the table "mempool_origination". All fields are combined with a logical 'AND'. */
["mempool_origination_bool_exp"]: {
		_and?: Array<GraphQLTypes["mempool_origination_bool_exp"] | undefined>,
	_not?: GraphQLTypes["mempool_origination_bool_exp"],
	_or?: Array<GraphQLTypes["mempool_origination_bool_exp"] | undefined>,
	balance?: GraphQLTypes["String_comparison_exp"],
	branch?: GraphQLTypes["String_comparison_exp"],
	counter?: GraphQLTypes["String_comparison_exp"],
	created_at?: GraphQLTypes["bigint_comparison_exp"],
	delegate?: GraphQLTypes["String_comparison_exp"],
	errors?: GraphQLTypes["jsonb_comparison_exp"],
	expiration_level?: GraphQLTypes["bigint_comparison_exp"],
	fee?: GraphQLTypes["String_comparison_exp"],
	gas_limit?: GraphQLTypes["String_comparison_exp"],
	hash?: GraphQLTypes["String_comparison_exp"],
	kind?: GraphQLTypes["String_comparison_exp"],
	level?: GraphQLTypes["bigint_comparison_exp"],
	network?: GraphQLTypes["String_comparison_exp"],
	signature?: GraphQLTypes["String_comparison_exp"],
	status?: GraphQLTypes["String_comparison_exp"],
	storage?: GraphQLTypes["jsonb_comparison_exp"],
	storage_limit?: GraphQLTypes["String_comparison_exp"],
	updated_at?: GraphQLTypes["bigint_comparison_exp"]
};
	/** aggregate max on columns */
["mempool_origination_max_fields"]: {
	__typename: "mempool_origination_max_fields",
	balance?: string,
	branch?: string,
	counter?: string,
	created_at?: GraphQLTypes["bigint"],
	delegate?: string,
	expiration_level?: GraphQLTypes["bigint"],
	fee?: string,
	gas_limit?: string,
	hash?: string,
	kind?: string,
	level?: GraphQLTypes["bigint"],
	network?: string,
	signature?: string,
	status?: string,
	storage_limit?: string,
	updated_at?: GraphQLTypes["bigint"]
};
	/** order by max() on columns of table "mempool_origination" */
["mempool_origination_max_order_by"]: {
		balance?: GraphQLTypes["order_by"],
	branch?: GraphQLTypes["order_by"],
	counter?: GraphQLTypes["order_by"],
	created_at?: GraphQLTypes["order_by"],
	delegate?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	fee?: GraphQLTypes["order_by"],
	gas_limit?: GraphQLTypes["order_by"],
	hash?: GraphQLTypes["order_by"],
	kind?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	network?: GraphQLTypes["order_by"],
	signature?: GraphQLTypes["order_by"],
	status?: GraphQLTypes["order_by"],
	storage_limit?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate min on columns */
["mempool_origination_min_fields"]: {
	__typename: "mempool_origination_min_fields",
	balance?: string,
	branch?: string,
	counter?: string,
	created_at?: GraphQLTypes["bigint"],
	delegate?: string,
	expiration_level?: GraphQLTypes["bigint"],
	fee?: string,
	gas_limit?: string,
	hash?: string,
	kind?: string,
	level?: GraphQLTypes["bigint"],
	network?: string,
	signature?: string,
	status?: string,
	storage_limit?: string,
	updated_at?: GraphQLTypes["bigint"]
};
	/** order by min() on columns of table "mempool_origination" */
["mempool_origination_min_order_by"]: {
		balance?: GraphQLTypes["order_by"],
	branch?: GraphQLTypes["order_by"],
	counter?: GraphQLTypes["order_by"],
	created_at?: GraphQLTypes["order_by"],
	delegate?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	fee?: GraphQLTypes["order_by"],
	gas_limit?: GraphQLTypes["order_by"],
	hash?: GraphQLTypes["order_by"],
	kind?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	network?: GraphQLTypes["order_by"],
	signature?: GraphQLTypes["order_by"],
	status?: GraphQLTypes["order_by"],
	storage_limit?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** ordering options when selecting data from "mempool_origination" */
["mempool_origination_order_by"]: {
		balance?: GraphQLTypes["order_by"],
	branch?: GraphQLTypes["order_by"],
	counter?: GraphQLTypes["order_by"],
	created_at?: GraphQLTypes["order_by"],
	delegate?: GraphQLTypes["order_by"],
	errors?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	fee?: GraphQLTypes["order_by"],
	gas_limit?: GraphQLTypes["order_by"],
	hash?: GraphQLTypes["order_by"],
	kind?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	network?: GraphQLTypes["order_by"],
	signature?: GraphQLTypes["order_by"],
	status?: GraphQLTypes["order_by"],
	storage?: GraphQLTypes["order_by"],
	storage_limit?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** primary key columns input for table: "mempool_origination" */
["mempool_origination_pk_columns_input"]: {
		counter: string,
	hash: string,
	network: string
};
	/** select columns of table "mempool_origination" */
["mempool_origination_select_column"]: mempool_origination_select_column;
	/** aggregate stddev on columns */
["mempool_origination_stddev_fields"]: {
	__typename: "mempool_origination_stddev_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	updated_at?: number
};
	/** order by stddev() on columns of table "mempool_origination" */
["mempool_origination_stddev_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate stddev_pop on columns */
["mempool_origination_stddev_pop_fields"]: {
	__typename: "mempool_origination_stddev_pop_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	updated_at?: number
};
	/** order by stddev_pop() on columns of table "mempool_origination" */
["mempool_origination_stddev_pop_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate stddev_samp on columns */
["mempool_origination_stddev_samp_fields"]: {
	__typename: "mempool_origination_stddev_samp_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	updated_at?: number
};
	/** order by stddev_samp() on columns of table "mempool_origination" */
["mempool_origination_stddev_samp_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate sum on columns */
["mempool_origination_sum_fields"]: {
	__typename: "mempool_origination_sum_fields",
	created_at?: GraphQLTypes["bigint"],
	expiration_level?: GraphQLTypes["bigint"],
	level?: GraphQLTypes["bigint"],
	updated_at?: GraphQLTypes["bigint"]
};
	/** order by sum() on columns of table "mempool_origination" */
["mempool_origination_sum_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate var_pop on columns */
["mempool_origination_var_pop_fields"]: {
	__typename: "mempool_origination_var_pop_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	updated_at?: number
};
	/** order by var_pop() on columns of table "mempool_origination" */
["mempool_origination_var_pop_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate var_samp on columns */
["mempool_origination_var_samp_fields"]: {
	__typename: "mempool_origination_var_samp_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	updated_at?: number
};
	/** order by var_samp() on columns of table "mempool_origination" */
["mempool_origination_var_samp_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate variance on columns */
["mempool_origination_variance_fields"]: {
	__typename: "mempool_origination_variance_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	updated_at?: number
};
	/** order by variance() on columns of table "mempool_origination" */
["mempool_origination_variance_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** columns and relationships of "mempool_proposal" */
["mempool_proposal"]: {
	__typename: "mempool_proposal",
	branch?: string,
	created_at?: GraphQLTypes["bigint"],
	errors?: GraphQLTypes["jsonb"],
	expiration_level?: GraphQLTypes["bigint"],
	hash: string,
	kind?: string,
	level?: GraphQLTypes["bigint"],
	network: string,
	period?: GraphQLTypes["bigint"],
	proposals?: string,
	signature?: string,
	status?: string,
	updated_at?: GraphQLTypes["bigint"]
};
	/** aggregated selection of "mempool_proposal" */
["mempool_proposal_aggregate"]: {
	__typename: "mempool_proposal_aggregate",
	aggregate?: GraphQLTypes["mempool_proposal_aggregate_fields"],
	nodes: Array<GraphQLTypes["mempool_proposal"]>
};
	/** aggregate fields of "mempool_proposal" */
["mempool_proposal_aggregate_fields"]: {
	__typename: "mempool_proposal_aggregate_fields",
	avg?: GraphQLTypes["mempool_proposal_avg_fields"],
	count?: number,
	max?: GraphQLTypes["mempool_proposal_max_fields"],
	min?: GraphQLTypes["mempool_proposal_min_fields"],
	stddev?: GraphQLTypes["mempool_proposal_stddev_fields"],
	stddev_pop?: GraphQLTypes["mempool_proposal_stddev_pop_fields"],
	stddev_samp?: GraphQLTypes["mempool_proposal_stddev_samp_fields"],
	sum?: GraphQLTypes["mempool_proposal_sum_fields"],
	var_pop?: GraphQLTypes["mempool_proposal_var_pop_fields"],
	var_samp?: GraphQLTypes["mempool_proposal_var_samp_fields"],
	variance?: GraphQLTypes["mempool_proposal_variance_fields"]
};
	/** order by aggregate values of table "mempool_proposal" */
["mempool_proposal_aggregate_order_by"]: {
		avg?: GraphQLTypes["mempool_proposal_avg_order_by"],
	count?: GraphQLTypes["order_by"],
	max?: GraphQLTypes["mempool_proposal_max_order_by"],
	min?: GraphQLTypes["mempool_proposal_min_order_by"],
	stddev?: GraphQLTypes["mempool_proposal_stddev_order_by"],
	stddev_pop?: GraphQLTypes["mempool_proposal_stddev_pop_order_by"],
	stddev_samp?: GraphQLTypes["mempool_proposal_stddev_samp_order_by"],
	sum?: GraphQLTypes["mempool_proposal_sum_order_by"],
	var_pop?: GraphQLTypes["mempool_proposal_var_pop_order_by"],
	var_samp?: GraphQLTypes["mempool_proposal_var_samp_order_by"],
	variance?: GraphQLTypes["mempool_proposal_variance_order_by"]
};
	/** aggregate avg on columns */
["mempool_proposal_avg_fields"]: {
	__typename: "mempool_proposal_avg_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	period?: number,
	updated_at?: number
};
	/** order by avg() on columns of table "mempool_proposal" */
["mempool_proposal_avg_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	period?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** Boolean expression to filter rows from the table "mempool_proposal". All fields are combined with a logical 'AND'. */
["mempool_proposal_bool_exp"]: {
		_and?: Array<GraphQLTypes["mempool_proposal_bool_exp"] | undefined>,
	_not?: GraphQLTypes["mempool_proposal_bool_exp"],
	_or?: Array<GraphQLTypes["mempool_proposal_bool_exp"] | undefined>,
	branch?: GraphQLTypes["String_comparison_exp"],
	created_at?: GraphQLTypes["bigint_comparison_exp"],
	errors?: GraphQLTypes["jsonb_comparison_exp"],
	expiration_level?: GraphQLTypes["bigint_comparison_exp"],
	hash?: GraphQLTypes["String_comparison_exp"],
	kind?: GraphQLTypes["String_comparison_exp"],
	level?: GraphQLTypes["bigint_comparison_exp"],
	network?: GraphQLTypes["String_comparison_exp"],
	period?: GraphQLTypes["bigint_comparison_exp"],
	proposals?: GraphQLTypes["String_comparison_exp"],
	signature?: GraphQLTypes["String_comparison_exp"],
	status?: GraphQLTypes["String_comparison_exp"],
	updated_at?: GraphQLTypes["bigint_comparison_exp"]
};
	/** aggregate max on columns */
["mempool_proposal_max_fields"]: {
	__typename: "mempool_proposal_max_fields",
	branch?: string,
	created_at?: GraphQLTypes["bigint"],
	expiration_level?: GraphQLTypes["bigint"],
	hash?: string,
	kind?: string,
	level?: GraphQLTypes["bigint"],
	network?: string,
	period?: GraphQLTypes["bigint"],
	proposals?: string,
	signature?: string,
	status?: string,
	updated_at?: GraphQLTypes["bigint"]
};
	/** order by max() on columns of table "mempool_proposal" */
["mempool_proposal_max_order_by"]: {
		branch?: GraphQLTypes["order_by"],
	created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	hash?: GraphQLTypes["order_by"],
	kind?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	network?: GraphQLTypes["order_by"],
	period?: GraphQLTypes["order_by"],
	proposals?: GraphQLTypes["order_by"],
	signature?: GraphQLTypes["order_by"],
	status?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate min on columns */
["mempool_proposal_min_fields"]: {
	__typename: "mempool_proposal_min_fields",
	branch?: string,
	created_at?: GraphQLTypes["bigint"],
	expiration_level?: GraphQLTypes["bigint"],
	hash?: string,
	kind?: string,
	level?: GraphQLTypes["bigint"],
	network?: string,
	period?: GraphQLTypes["bigint"],
	proposals?: string,
	signature?: string,
	status?: string,
	updated_at?: GraphQLTypes["bigint"]
};
	/** order by min() on columns of table "mempool_proposal" */
["mempool_proposal_min_order_by"]: {
		branch?: GraphQLTypes["order_by"],
	created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	hash?: GraphQLTypes["order_by"],
	kind?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	network?: GraphQLTypes["order_by"],
	period?: GraphQLTypes["order_by"],
	proposals?: GraphQLTypes["order_by"],
	signature?: GraphQLTypes["order_by"],
	status?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** ordering options when selecting data from "mempool_proposal" */
["mempool_proposal_order_by"]: {
		branch?: GraphQLTypes["order_by"],
	created_at?: GraphQLTypes["order_by"],
	errors?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	hash?: GraphQLTypes["order_by"],
	kind?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	network?: GraphQLTypes["order_by"],
	period?: GraphQLTypes["order_by"],
	proposals?: GraphQLTypes["order_by"],
	signature?: GraphQLTypes["order_by"],
	status?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** primary key columns input for table: "mempool_proposal" */
["mempool_proposal_pk_columns_input"]: {
		hash: string,
	network: string
};
	/** select columns of table "mempool_proposal" */
["mempool_proposal_select_column"]: mempool_proposal_select_column;
	/** aggregate stddev on columns */
["mempool_proposal_stddev_fields"]: {
	__typename: "mempool_proposal_stddev_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	period?: number,
	updated_at?: number
};
	/** order by stddev() on columns of table "mempool_proposal" */
["mempool_proposal_stddev_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	period?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate stddev_pop on columns */
["mempool_proposal_stddev_pop_fields"]: {
	__typename: "mempool_proposal_stddev_pop_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	period?: number,
	updated_at?: number
};
	/** order by stddev_pop() on columns of table "mempool_proposal" */
["mempool_proposal_stddev_pop_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	period?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate stddev_samp on columns */
["mempool_proposal_stddev_samp_fields"]: {
	__typename: "mempool_proposal_stddev_samp_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	period?: number,
	updated_at?: number
};
	/** order by stddev_samp() on columns of table "mempool_proposal" */
["mempool_proposal_stddev_samp_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	period?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate sum on columns */
["mempool_proposal_sum_fields"]: {
	__typename: "mempool_proposal_sum_fields",
	created_at?: GraphQLTypes["bigint"],
	expiration_level?: GraphQLTypes["bigint"],
	level?: GraphQLTypes["bigint"],
	period?: GraphQLTypes["bigint"],
	updated_at?: GraphQLTypes["bigint"]
};
	/** order by sum() on columns of table "mempool_proposal" */
["mempool_proposal_sum_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	period?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate var_pop on columns */
["mempool_proposal_var_pop_fields"]: {
	__typename: "mempool_proposal_var_pop_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	period?: number,
	updated_at?: number
};
	/** order by var_pop() on columns of table "mempool_proposal" */
["mempool_proposal_var_pop_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	period?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate var_samp on columns */
["mempool_proposal_var_samp_fields"]: {
	__typename: "mempool_proposal_var_samp_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	period?: number,
	updated_at?: number
};
	/** order by var_samp() on columns of table "mempool_proposal" */
["mempool_proposal_var_samp_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	period?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate variance on columns */
["mempool_proposal_variance_fields"]: {
	__typename: "mempool_proposal_variance_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	period?: number,
	updated_at?: number
};
	/** order by variance() on columns of table "mempool_proposal" */
["mempool_proposal_variance_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	period?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** columns and relationships of "mempool_reveal" */
["mempool_reveal"]: {
	__typename: "mempool_reveal",
	branch?: string,
	counter: string,
	created_at?: GraphQLTypes["bigint"],
	errors?: GraphQLTypes["jsonb"],
	expiration_level?: GraphQLTypes["bigint"],
	fee?: string,
	gas_limit?: string,
	hash: string,
	kind?: string,
	level?: GraphQLTypes["bigint"],
	network: string,
	public_key?: string,
	signature?: string,
	source?: string,
	status?: string,
	storage_limit?: string,
	updated_at?: GraphQLTypes["bigint"]
};
	/** aggregated selection of "mempool_reveal" */
["mempool_reveal_aggregate"]: {
	__typename: "mempool_reveal_aggregate",
	aggregate?: GraphQLTypes["mempool_reveal_aggregate_fields"],
	nodes: Array<GraphQLTypes["mempool_reveal"]>
};
	/** aggregate fields of "mempool_reveal" */
["mempool_reveal_aggregate_fields"]: {
	__typename: "mempool_reveal_aggregate_fields",
	avg?: GraphQLTypes["mempool_reveal_avg_fields"],
	count?: number,
	max?: GraphQLTypes["mempool_reveal_max_fields"],
	min?: GraphQLTypes["mempool_reveal_min_fields"],
	stddev?: GraphQLTypes["mempool_reveal_stddev_fields"],
	stddev_pop?: GraphQLTypes["mempool_reveal_stddev_pop_fields"],
	stddev_samp?: GraphQLTypes["mempool_reveal_stddev_samp_fields"],
	sum?: GraphQLTypes["mempool_reveal_sum_fields"],
	var_pop?: GraphQLTypes["mempool_reveal_var_pop_fields"],
	var_samp?: GraphQLTypes["mempool_reveal_var_samp_fields"],
	variance?: GraphQLTypes["mempool_reveal_variance_fields"]
};
	/** order by aggregate values of table "mempool_reveal" */
["mempool_reveal_aggregate_order_by"]: {
		avg?: GraphQLTypes["mempool_reveal_avg_order_by"],
	count?: GraphQLTypes["order_by"],
	max?: GraphQLTypes["mempool_reveal_max_order_by"],
	min?: GraphQLTypes["mempool_reveal_min_order_by"],
	stddev?: GraphQLTypes["mempool_reveal_stddev_order_by"],
	stddev_pop?: GraphQLTypes["mempool_reveal_stddev_pop_order_by"],
	stddev_samp?: GraphQLTypes["mempool_reveal_stddev_samp_order_by"],
	sum?: GraphQLTypes["mempool_reveal_sum_order_by"],
	var_pop?: GraphQLTypes["mempool_reveal_var_pop_order_by"],
	var_samp?: GraphQLTypes["mempool_reveal_var_samp_order_by"],
	variance?: GraphQLTypes["mempool_reveal_variance_order_by"]
};
	/** aggregate avg on columns */
["mempool_reveal_avg_fields"]: {
	__typename: "mempool_reveal_avg_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	updated_at?: number
};
	/** order by avg() on columns of table "mempool_reveal" */
["mempool_reveal_avg_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** Boolean expression to filter rows from the table "mempool_reveal". All fields are combined with a logical 'AND'. */
["mempool_reveal_bool_exp"]: {
		_and?: Array<GraphQLTypes["mempool_reveal_bool_exp"] | undefined>,
	_not?: GraphQLTypes["mempool_reveal_bool_exp"],
	_or?: Array<GraphQLTypes["mempool_reveal_bool_exp"] | undefined>,
	branch?: GraphQLTypes["String_comparison_exp"],
	counter?: GraphQLTypes["String_comparison_exp"],
	created_at?: GraphQLTypes["bigint_comparison_exp"],
	errors?: GraphQLTypes["jsonb_comparison_exp"],
	expiration_level?: GraphQLTypes["bigint_comparison_exp"],
	fee?: GraphQLTypes["String_comparison_exp"],
	gas_limit?: GraphQLTypes["String_comparison_exp"],
	hash?: GraphQLTypes["String_comparison_exp"],
	kind?: GraphQLTypes["String_comparison_exp"],
	level?: GraphQLTypes["bigint_comparison_exp"],
	network?: GraphQLTypes["String_comparison_exp"],
	public_key?: GraphQLTypes["String_comparison_exp"],
	signature?: GraphQLTypes["String_comparison_exp"],
	source?: GraphQLTypes["String_comparison_exp"],
	status?: GraphQLTypes["String_comparison_exp"],
	storage_limit?: GraphQLTypes["String_comparison_exp"],
	updated_at?: GraphQLTypes["bigint_comparison_exp"]
};
	/** aggregate max on columns */
["mempool_reveal_max_fields"]: {
	__typename: "mempool_reveal_max_fields",
	branch?: string,
	counter?: string,
	created_at?: GraphQLTypes["bigint"],
	expiration_level?: GraphQLTypes["bigint"],
	fee?: string,
	gas_limit?: string,
	hash?: string,
	kind?: string,
	level?: GraphQLTypes["bigint"],
	network?: string,
	public_key?: string,
	signature?: string,
	source?: string,
	status?: string,
	storage_limit?: string,
	updated_at?: GraphQLTypes["bigint"]
};
	/** order by max() on columns of table "mempool_reveal" */
["mempool_reveal_max_order_by"]: {
		branch?: GraphQLTypes["order_by"],
	counter?: GraphQLTypes["order_by"],
	created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	fee?: GraphQLTypes["order_by"],
	gas_limit?: GraphQLTypes["order_by"],
	hash?: GraphQLTypes["order_by"],
	kind?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	network?: GraphQLTypes["order_by"],
	public_key?: GraphQLTypes["order_by"],
	signature?: GraphQLTypes["order_by"],
	source?: GraphQLTypes["order_by"],
	status?: GraphQLTypes["order_by"],
	storage_limit?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate min on columns */
["mempool_reveal_min_fields"]: {
	__typename: "mempool_reveal_min_fields",
	branch?: string,
	counter?: string,
	created_at?: GraphQLTypes["bigint"],
	expiration_level?: GraphQLTypes["bigint"],
	fee?: string,
	gas_limit?: string,
	hash?: string,
	kind?: string,
	level?: GraphQLTypes["bigint"],
	network?: string,
	public_key?: string,
	signature?: string,
	source?: string,
	status?: string,
	storage_limit?: string,
	updated_at?: GraphQLTypes["bigint"]
};
	/** order by min() on columns of table "mempool_reveal" */
["mempool_reveal_min_order_by"]: {
		branch?: GraphQLTypes["order_by"],
	counter?: GraphQLTypes["order_by"],
	created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	fee?: GraphQLTypes["order_by"],
	gas_limit?: GraphQLTypes["order_by"],
	hash?: GraphQLTypes["order_by"],
	kind?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	network?: GraphQLTypes["order_by"],
	public_key?: GraphQLTypes["order_by"],
	signature?: GraphQLTypes["order_by"],
	source?: GraphQLTypes["order_by"],
	status?: GraphQLTypes["order_by"],
	storage_limit?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** ordering options when selecting data from "mempool_reveal" */
["mempool_reveal_order_by"]: {
		branch?: GraphQLTypes["order_by"],
	counter?: GraphQLTypes["order_by"],
	created_at?: GraphQLTypes["order_by"],
	errors?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	fee?: GraphQLTypes["order_by"],
	gas_limit?: GraphQLTypes["order_by"],
	hash?: GraphQLTypes["order_by"],
	kind?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	network?: GraphQLTypes["order_by"],
	public_key?: GraphQLTypes["order_by"],
	signature?: GraphQLTypes["order_by"],
	source?: GraphQLTypes["order_by"],
	status?: GraphQLTypes["order_by"],
	storage_limit?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** primary key columns input for table: "mempool_reveal" */
["mempool_reveal_pk_columns_input"]: {
		counter: string,
	hash: string,
	network: string
};
	/** select columns of table "mempool_reveal" */
["mempool_reveal_select_column"]: mempool_reveal_select_column;
	/** aggregate stddev on columns */
["mempool_reveal_stddev_fields"]: {
	__typename: "mempool_reveal_stddev_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	updated_at?: number
};
	/** order by stddev() on columns of table "mempool_reveal" */
["mempool_reveal_stddev_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate stddev_pop on columns */
["mempool_reveal_stddev_pop_fields"]: {
	__typename: "mempool_reveal_stddev_pop_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	updated_at?: number
};
	/** order by stddev_pop() on columns of table "mempool_reveal" */
["mempool_reveal_stddev_pop_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate stddev_samp on columns */
["mempool_reveal_stddev_samp_fields"]: {
	__typename: "mempool_reveal_stddev_samp_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	updated_at?: number
};
	/** order by stddev_samp() on columns of table "mempool_reveal" */
["mempool_reveal_stddev_samp_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate sum on columns */
["mempool_reveal_sum_fields"]: {
	__typename: "mempool_reveal_sum_fields",
	created_at?: GraphQLTypes["bigint"],
	expiration_level?: GraphQLTypes["bigint"],
	level?: GraphQLTypes["bigint"],
	updated_at?: GraphQLTypes["bigint"]
};
	/** order by sum() on columns of table "mempool_reveal" */
["mempool_reveal_sum_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate var_pop on columns */
["mempool_reveal_var_pop_fields"]: {
	__typename: "mempool_reveal_var_pop_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	updated_at?: number
};
	/** order by var_pop() on columns of table "mempool_reveal" */
["mempool_reveal_var_pop_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate var_samp on columns */
["mempool_reveal_var_samp_fields"]: {
	__typename: "mempool_reveal_var_samp_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	updated_at?: number
};
	/** order by var_samp() on columns of table "mempool_reveal" */
["mempool_reveal_var_samp_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate variance on columns */
["mempool_reveal_variance_fields"]: {
	__typename: "mempool_reveal_variance_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	updated_at?: number
};
	/** order by variance() on columns of table "mempool_reveal" */
["mempool_reveal_variance_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** columns and relationships of "mempool_transaction" */
["mempool_transaction"]: {
	__typename: "mempool_transaction",
	amount?: string,
	branch?: string,
	counter: string,
	created_at?: GraphQLTypes["bigint"],
	destination?: string,
	errors?: GraphQLTypes["jsonb"],
	expiration_level?: GraphQLTypes["bigint"],
	fee?: string,
	gas_limit?: string,
	hash: string,
	kind?: string,
	level?: GraphQLTypes["bigint"],
	network: string,
	parameters?: GraphQLTypes["jsonb"],
	signature?: string,
	source?: string,
	status?: string,
	storage_limit?: string,
	updated_at?: GraphQLTypes["bigint"]
};
	/** aggregated selection of "mempool_transaction" */
["mempool_transaction_aggregate"]: {
	__typename: "mempool_transaction_aggregate",
	aggregate?: GraphQLTypes["mempool_transaction_aggregate_fields"],
	nodes: Array<GraphQLTypes["mempool_transaction"]>
};
	/** aggregate fields of "mempool_transaction" */
["mempool_transaction_aggregate_fields"]: {
	__typename: "mempool_transaction_aggregate_fields",
	avg?: GraphQLTypes["mempool_transaction_avg_fields"],
	count?: number,
	max?: GraphQLTypes["mempool_transaction_max_fields"],
	min?: GraphQLTypes["mempool_transaction_min_fields"],
	stddev?: GraphQLTypes["mempool_transaction_stddev_fields"],
	stddev_pop?: GraphQLTypes["mempool_transaction_stddev_pop_fields"],
	stddev_samp?: GraphQLTypes["mempool_transaction_stddev_samp_fields"],
	sum?: GraphQLTypes["mempool_transaction_sum_fields"],
	var_pop?: GraphQLTypes["mempool_transaction_var_pop_fields"],
	var_samp?: GraphQLTypes["mempool_transaction_var_samp_fields"],
	variance?: GraphQLTypes["mempool_transaction_variance_fields"]
};
	/** order by aggregate values of table "mempool_transaction" */
["mempool_transaction_aggregate_order_by"]: {
		avg?: GraphQLTypes["mempool_transaction_avg_order_by"],
	count?: GraphQLTypes["order_by"],
	max?: GraphQLTypes["mempool_transaction_max_order_by"],
	min?: GraphQLTypes["mempool_transaction_min_order_by"],
	stddev?: GraphQLTypes["mempool_transaction_stddev_order_by"],
	stddev_pop?: GraphQLTypes["mempool_transaction_stddev_pop_order_by"],
	stddev_samp?: GraphQLTypes["mempool_transaction_stddev_samp_order_by"],
	sum?: GraphQLTypes["mempool_transaction_sum_order_by"],
	var_pop?: GraphQLTypes["mempool_transaction_var_pop_order_by"],
	var_samp?: GraphQLTypes["mempool_transaction_var_samp_order_by"],
	variance?: GraphQLTypes["mempool_transaction_variance_order_by"]
};
	/** aggregate avg on columns */
["mempool_transaction_avg_fields"]: {
	__typename: "mempool_transaction_avg_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	updated_at?: number
};
	/** order by avg() on columns of table "mempool_transaction" */
["mempool_transaction_avg_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** Boolean expression to filter rows from the table "mempool_transaction". All fields are combined with a logical 'AND'. */
["mempool_transaction_bool_exp"]: {
		_and?: Array<GraphQLTypes["mempool_transaction_bool_exp"] | undefined>,
	_not?: GraphQLTypes["mempool_transaction_bool_exp"],
	_or?: Array<GraphQLTypes["mempool_transaction_bool_exp"] | undefined>,
	amount?: GraphQLTypes["String_comparison_exp"],
	branch?: GraphQLTypes["String_comparison_exp"],
	counter?: GraphQLTypes["String_comparison_exp"],
	created_at?: GraphQLTypes["bigint_comparison_exp"],
	destination?: GraphQLTypes["String_comparison_exp"],
	errors?: GraphQLTypes["jsonb_comparison_exp"],
	expiration_level?: GraphQLTypes["bigint_comparison_exp"],
	fee?: GraphQLTypes["String_comparison_exp"],
	gas_limit?: GraphQLTypes["String_comparison_exp"],
	hash?: GraphQLTypes["String_comparison_exp"],
	kind?: GraphQLTypes["String_comparison_exp"],
	level?: GraphQLTypes["bigint_comparison_exp"],
	network?: GraphQLTypes["String_comparison_exp"],
	parameters?: GraphQLTypes["jsonb_comparison_exp"],
	signature?: GraphQLTypes["String_comparison_exp"],
	source?: GraphQLTypes["String_comparison_exp"],
	status?: GraphQLTypes["String_comparison_exp"],
	storage_limit?: GraphQLTypes["String_comparison_exp"],
	updated_at?: GraphQLTypes["bigint_comparison_exp"]
};
	/** aggregate max on columns */
["mempool_transaction_max_fields"]: {
	__typename: "mempool_transaction_max_fields",
	amount?: string,
	branch?: string,
	counter?: string,
	created_at?: GraphQLTypes["bigint"],
	destination?: string,
	expiration_level?: GraphQLTypes["bigint"],
	fee?: string,
	gas_limit?: string,
	hash?: string,
	kind?: string,
	level?: GraphQLTypes["bigint"],
	network?: string,
	signature?: string,
	source?: string,
	status?: string,
	storage_limit?: string,
	updated_at?: GraphQLTypes["bigint"]
};
	/** order by max() on columns of table "mempool_transaction" */
["mempool_transaction_max_order_by"]: {
		amount?: GraphQLTypes["order_by"],
	branch?: GraphQLTypes["order_by"],
	counter?: GraphQLTypes["order_by"],
	created_at?: GraphQLTypes["order_by"],
	destination?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	fee?: GraphQLTypes["order_by"],
	gas_limit?: GraphQLTypes["order_by"],
	hash?: GraphQLTypes["order_by"],
	kind?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	network?: GraphQLTypes["order_by"],
	signature?: GraphQLTypes["order_by"],
	source?: GraphQLTypes["order_by"],
	status?: GraphQLTypes["order_by"],
	storage_limit?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate min on columns */
["mempool_transaction_min_fields"]: {
	__typename: "mempool_transaction_min_fields",
	amount?: string,
	branch?: string,
	counter?: string,
	created_at?: GraphQLTypes["bigint"],
	destination?: string,
	expiration_level?: GraphQLTypes["bigint"],
	fee?: string,
	gas_limit?: string,
	hash?: string,
	kind?: string,
	level?: GraphQLTypes["bigint"],
	network?: string,
	signature?: string,
	source?: string,
	status?: string,
	storage_limit?: string,
	updated_at?: GraphQLTypes["bigint"]
};
	/** order by min() on columns of table "mempool_transaction" */
["mempool_transaction_min_order_by"]: {
		amount?: GraphQLTypes["order_by"],
	branch?: GraphQLTypes["order_by"],
	counter?: GraphQLTypes["order_by"],
	created_at?: GraphQLTypes["order_by"],
	destination?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	fee?: GraphQLTypes["order_by"],
	gas_limit?: GraphQLTypes["order_by"],
	hash?: GraphQLTypes["order_by"],
	kind?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	network?: GraphQLTypes["order_by"],
	signature?: GraphQLTypes["order_by"],
	source?: GraphQLTypes["order_by"],
	status?: GraphQLTypes["order_by"],
	storage_limit?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** ordering options when selecting data from "mempool_transaction" */
["mempool_transaction_order_by"]: {
		amount?: GraphQLTypes["order_by"],
	branch?: GraphQLTypes["order_by"],
	counter?: GraphQLTypes["order_by"],
	created_at?: GraphQLTypes["order_by"],
	destination?: GraphQLTypes["order_by"],
	errors?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	fee?: GraphQLTypes["order_by"],
	gas_limit?: GraphQLTypes["order_by"],
	hash?: GraphQLTypes["order_by"],
	kind?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	network?: GraphQLTypes["order_by"],
	parameters?: GraphQLTypes["order_by"],
	signature?: GraphQLTypes["order_by"],
	source?: GraphQLTypes["order_by"],
	status?: GraphQLTypes["order_by"],
	storage_limit?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** primary key columns input for table: "mempool_transaction" */
["mempool_transaction_pk_columns_input"]: {
		counter: string,
	hash: string,
	network: string
};
	/** select columns of table "mempool_transaction" */
["mempool_transaction_select_column"]: mempool_transaction_select_column;
	/** aggregate stddev on columns */
["mempool_transaction_stddev_fields"]: {
	__typename: "mempool_transaction_stddev_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	updated_at?: number
};
	/** order by stddev() on columns of table "mempool_transaction" */
["mempool_transaction_stddev_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate stddev_pop on columns */
["mempool_transaction_stddev_pop_fields"]: {
	__typename: "mempool_transaction_stddev_pop_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	updated_at?: number
};
	/** order by stddev_pop() on columns of table "mempool_transaction" */
["mempool_transaction_stddev_pop_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate stddev_samp on columns */
["mempool_transaction_stddev_samp_fields"]: {
	__typename: "mempool_transaction_stddev_samp_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	updated_at?: number
};
	/** order by stddev_samp() on columns of table "mempool_transaction" */
["mempool_transaction_stddev_samp_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate sum on columns */
["mempool_transaction_sum_fields"]: {
	__typename: "mempool_transaction_sum_fields",
	created_at?: GraphQLTypes["bigint"],
	expiration_level?: GraphQLTypes["bigint"],
	level?: GraphQLTypes["bigint"],
	updated_at?: GraphQLTypes["bigint"]
};
	/** order by sum() on columns of table "mempool_transaction" */
["mempool_transaction_sum_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate var_pop on columns */
["mempool_transaction_var_pop_fields"]: {
	__typename: "mempool_transaction_var_pop_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	updated_at?: number
};
	/** order by var_pop() on columns of table "mempool_transaction" */
["mempool_transaction_var_pop_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate var_samp on columns */
["mempool_transaction_var_samp_fields"]: {
	__typename: "mempool_transaction_var_samp_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	updated_at?: number
};
	/** order by var_samp() on columns of table "mempool_transaction" */
["mempool_transaction_var_samp_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** aggregate variance on columns */
["mempool_transaction_variance_fields"]: {
	__typename: "mempool_transaction_variance_fields",
	created_at?: number,
	expiration_level?: number,
	level?: number,
	updated_at?: number
};
	/** order by variance() on columns of table "mempool_transaction" */
["mempool_transaction_variance_order_by"]: {
		created_at?: GraphQLTypes["order_by"],
	expiration_level?: GraphQLTypes["order_by"],
	level?: GraphQLTypes["order_by"],
	updated_at?: GraphQLTypes["order_by"]
};
	/** column ordering options */
["order_by"]: order_by;
	/** query root */
["query_root"]: {
	__typename: "query_root",
	/** fetch data from the table: "mempool_activate_account" */
	mempool_activate_account: Array<GraphQLTypes["mempool_activate_account"]>,
	/** fetch aggregated fields from the table: "mempool_activate_account" */
	mempool_activate_account_aggregate: GraphQLTypes["mempool_activate_account_aggregate"],
	/** fetch data from the table: "mempool_activate_account" using primary key columns */
	mempool_activate_account_by_pk?: GraphQLTypes["mempool_activate_account"],
	/** fetch data from the table: "mempool_ballot" */
	mempool_ballot: Array<GraphQLTypes["mempool_ballot"]>,
	/** fetch aggregated fields from the table: "mempool_ballot" */
	mempool_ballot_aggregate: GraphQLTypes["mempool_ballot_aggregate"],
	/** fetch data from the table: "mempool_ballot" using primary key columns */
	mempool_ballot_by_pk?: GraphQLTypes["mempool_ballot"],
	/** fetch data from the table: "mempool_delegation" */
	mempool_delegation: Array<GraphQLTypes["mempool_delegation"]>,
	/** fetch aggregated fields from the table: "mempool_delegation" */
	mempool_delegation_aggregate: GraphQLTypes["mempool_delegation_aggregate"],
	/** fetch data from the table: "mempool_delegation" using primary key columns */
	mempool_delegation_by_pk?: GraphQLTypes["mempool_delegation"],
	/** fetch data from the table: "mempool_double_baking" */
	mempool_double_baking: Array<GraphQLTypes["mempool_double_baking"]>,
	/** fetch aggregated fields from the table: "mempool_double_baking" */
	mempool_double_baking_aggregate: GraphQLTypes["mempool_double_baking_aggregate"],
	/** fetch data from the table: "mempool_double_baking" using primary key columns */
	mempool_double_baking_by_pk?: GraphQLTypes["mempool_double_baking"],
	/** fetch data from the table: "mempool_double_endorsing" */
	mempool_double_endorsing: Array<GraphQLTypes["mempool_double_endorsing"]>,
	/** fetch aggregated fields from the table: "mempool_double_endorsing" */
	mempool_double_endorsing_aggregate: GraphQLTypes["mempool_double_endorsing_aggregate"],
	/** fetch data from the table: "mempool_double_endorsing" using primary key columns */
	mempool_double_endorsing_by_pk?: GraphQLTypes["mempool_double_endorsing"],
	/** fetch data from the table: "mempool_endorsement" */
	mempool_endorsement: Array<GraphQLTypes["mempool_endorsement"]>,
	/** fetch aggregated fields from the table: "mempool_endorsement" */
	mempool_endorsement_aggregate: GraphQLTypes["mempool_endorsement_aggregate"],
	/** fetch data from the table: "mempool_endorsement" using primary key columns */
	mempool_endorsement_by_pk?: GraphQLTypes["mempool_endorsement"],
	/** fetch data from the table: "mempool_nonce_revelation" */
	mempool_nonce_revelation: Array<GraphQLTypes["mempool_nonce_revelation"]>,
	/** fetch aggregated fields from the table: "mempool_nonce_revelation" */
	mempool_nonce_revelation_aggregate: GraphQLTypes["mempool_nonce_revelation_aggregate"],
	/** fetch data from the table: "mempool_nonce_revelation" using primary key columns */
	mempool_nonce_revelation_by_pk?: GraphQLTypes["mempool_nonce_revelation"],
	/** fetch data from the table: "mempool_origination" */
	mempool_origination: Array<GraphQLTypes["mempool_origination"]>,
	/** fetch aggregated fields from the table: "mempool_origination" */
	mempool_origination_aggregate: GraphQLTypes["mempool_origination_aggregate"],
	/** fetch data from the table: "mempool_origination" using primary key columns */
	mempool_origination_by_pk?: GraphQLTypes["mempool_origination"],
	/** fetch data from the table: "mempool_proposal" */
	mempool_proposal: Array<GraphQLTypes["mempool_proposal"]>,
	/** fetch aggregated fields from the table: "mempool_proposal" */
	mempool_proposal_aggregate: GraphQLTypes["mempool_proposal_aggregate"],
	/** fetch data from the table: "mempool_proposal" using primary key columns */
	mempool_proposal_by_pk?: GraphQLTypes["mempool_proposal"],
	/** fetch data from the table: "mempool_reveal" */
	mempool_reveal: Array<GraphQLTypes["mempool_reveal"]>,
	/** fetch aggregated fields from the table: "mempool_reveal" */
	mempool_reveal_aggregate: GraphQLTypes["mempool_reveal_aggregate"],
	/** fetch data from the table: "mempool_reveal" using primary key columns */
	mempool_reveal_by_pk?: GraphQLTypes["mempool_reveal"],
	/** fetch data from the table: "mempool_transaction" */
	mempool_transaction: Array<GraphQLTypes["mempool_transaction"]>,
	/** fetch aggregated fields from the table: "mempool_transaction" */
	mempool_transaction_aggregate: GraphQLTypes["mempool_transaction_aggregate"],
	/** fetch data from the table: "mempool_transaction" using primary key columns */
	mempool_transaction_by_pk?: GraphQLTypes["mempool_transaction"]
};
	/** subscription root */
["subscription_root"]: {
	__typename: "subscription_root",
	/** fetch data from the table: "mempool_activate_account" */
	mempool_activate_account: Array<GraphQLTypes["mempool_activate_account"]>,
	/** fetch aggregated fields from the table: "mempool_activate_account" */
	mempool_activate_account_aggregate: GraphQLTypes["mempool_activate_account_aggregate"],
	/** fetch data from the table: "mempool_activate_account" using primary key columns */
	mempool_activate_account_by_pk?: GraphQLTypes["mempool_activate_account"],
	/** fetch data from the table: "mempool_ballot" */
	mempool_ballot: Array<GraphQLTypes["mempool_ballot"]>,
	/** fetch aggregated fields from the table: "mempool_ballot" */
	mempool_ballot_aggregate: GraphQLTypes["mempool_ballot_aggregate"],
	/** fetch data from the table: "mempool_ballot" using primary key columns */
	mempool_ballot_by_pk?: GraphQLTypes["mempool_ballot"],
	/** fetch data from the table: "mempool_delegation" */
	mempool_delegation: Array<GraphQLTypes["mempool_delegation"]>,
	/** fetch aggregated fields from the table: "mempool_delegation" */
	mempool_delegation_aggregate: GraphQLTypes["mempool_delegation_aggregate"],
	/** fetch data from the table: "mempool_delegation" using primary key columns */
	mempool_delegation_by_pk?: GraphQLTypes["mempool_delegation"],
	/** fetch data from the table: "mempool_double_baking" */
	mempool_double_baking: Array<GraphQLTypes["mempool_double_baking"]>,
	/** fetch aggregated fields from the table: "mempool_double_baking" */
	mempool_double_baking_aggregate: GraphQLTypes["mempool_double_baking_aggregate"],
	/** fetch data from the table: "mempool_double_baking" using primary key columns */
	mempool_double_baking_by_pk?: GraphQLTypes["mempool_double_baking"],
	/** fetch data from the table: "mempool_double_endorsing" */
	mempool_double_endorsing: Array<GraphQLTypes["mempool_double_endorsing"]>,
	/** fetch aggregated fields from the table: "mempool_double_endorsing" */
	mempool_double_endorsing_aggregate: GraphQLTypes["mempool_double_endorsing_aggregate"],
	/** fetch data from the table: "mempool_double_endorsing" using primary key columns */
	mempool_double_endorsing_by_pk?: GraphQLTypes["mempool_double_endorsing"],
	/** fetch data from the table: "mempool_endorsement" */
	mempool_endorsement: Array<GraphQLTypes["mempool_endorsement"]>,
	/** fetch aggregated fields from the table: "mempool_endorsement" */
	mempool_endorsement_aggregate: GraphQLTypes["mempool_endorsement_aggregate"],
	/** fetch data from the table: "mempool_endorsement" using primary key columns */
	mempool_endorsement_by_pk?: GraphQLTypes["mempool_endorsement"],
	/** fetch data from the table: "mempool_nonce_revelation" */
	mempool_nonce_revelation: Array<GraphQLTypes["mempool_nonce_revelation"]>,
	/** fetch aggregated fields from the table: "mempool_nonce_revelation" */
	mempool_nonce_revelation_aggregate: GraphQLTypes["mempool_nonce_revelation_aggregate"],
	/** fetch data from the table: "mempool_nonce_revelation" using primary key columns */
	mempool_nonce_revelation_by_pk?: GraphQLTypes["mempool_nonce_revelation"],
	/** fetch data from the table: "mempool_origination" */
	mempool_origination: Array<GraphQLTypes["mempool_origination"]>,
	/** fetch aggregated fields from the table: "mempool_origination" */
	mempool_origination_aggregate: GraphQLTypes["mempool_origination_aggregate"],
	/** fetch data from the table: "mempool_origination" using primary key columns */
	mempool_origination_by_pk?: GraphQLTypes["mempool_origination"],
	/** fetch data from the table: "mempool_proposal" */
	mempool_proposal: Array<GraphQLTypes["mempool_proposal"]>,
	/** fetch aggregated fields from the table: "mempool_proposal" */
	mempool_proposal_aggregate: GraphQLTypes["mempool_proposal_aggregate"],
	/** fetch data from the table: "mempool_proposal" using primary key columns */
	mempool_proposal_by_pk?: GraphQLTypes["mempool_proposal"],
	/** fetch data from the table: "mempool_reveal" */
	mempool_reveal: Array<GraphQLTypes["mempool_reveal"]>,
	/** fetch aggregated fields from the table: "mempool_reveal" */
	mempool_reveal_aggregate: GraphQLTypes["mempool_reveal_aggregate"],
	/** fetch data from the table: "mempool_reveal" using primary key columns */
	mempool_reveal_by_pk?: GraphQLTypes["mempool_reveal"],
	/** fetch data from the table: "mempool_transaction" */
	mempool_transaction: Array<GraphQLTypes["mempool_transaction"]>,
	/** fetch aggregated fields from the table: "mempool_transaction" */
	mempool_transaction_aggregate: GraphQLTypes["mempool_transaction_aggregate"],
	/** fetch data from the table: "mempool_transaction" using primary key columns */
	mempool_transaction_by_pk?: GraphQLTypes["mempool_transaction"]
}
    }
/** select columns of table "mempool_activate_account" */
export enum mempool_activate_account_select_column {
	branch = "branch",
	created_at = "created_at",
	errors = "errors",
	expiration_level = "expiration_level",
	hash = "hash",
	kind = "kind",
	level = "level",
	network = "network",
	pkh = "pkh",
	secret = "secret",
	signature = "signature",
	status = "status",
	updated_at = "updated_at"
}
/** select columns of table "mempool_ballot" */
export enum mempool_ballot_select_column {
	ballot = "ballot",
	branch = "branch",
	created_at = "created_at",
	errors = "errors",
	expiration_level = "expiration_level",
	hash = "hash",
	kind = "kind",
	level = "level",
	network = "network",
	period = "period",
	signature = "signature",
	status = "status",
	updated_at = "updated_at"
}
/** select columns of table "mempool_delegation" */
export enum mempool_delegation_select_column {
	branch = "branch",
	counter = "counter",
	created_at = "created_at",
	delegate = "delegate",
	errors = "errors",
	expiration_level = "expiration_level",
	fee = "fee",
	gas_limit = "gas_limit",
	hash = "hash",
	kind = "kind",
	level = "level",
	network = "network",
	signature = "signature",
	status = "status",
	storage_limit = "storage_limit",
	updated_at = "updated_at"
}
/** select columns of table "mempool_double_baking" */
export enum mempool_double_baking_select_column {
	bh_1_level = "bh_1_level",
	bh_1_priority = "bh_1_priority",
	bh_1_proof_of_work_nonce = "bh_1_proof_of_work_nonce",
	bh_1_proto = "bh_1_proto",
	bh_1_validation_pass = "bh_1_validation_pass",
	bh_2_level = "bh_2_level",
	bh_2_priority = "bh_2_priority",
	bh_2_proof_of_work_nonce = "bh_2_proof_of_work_nonce",
	bh_2_proto = "bh_2_proto",
	bh_2_validation_pass = "bh_2_validation_pass",
	branch = "branch",
	created_at = "created_at",
	errors = "errors",
	expiration_level = "expiration_level",
	hash = "hash",
	kind = "kind",
	level = "level",
	network = "network",
	signature = "signature",
	status = "status",
	updated_at = "updated_at"
}
/** select columns of table "mempool_double_endorsing" */
export enum mempool_double_endorsing_select_column {
	branch = "branch",
	created_at = "created_at",
	errors = "errors",
	expiration_level = "expiration_level",
	hash = "hash",
	kind = "kind",
	level = "level",
	network = "network",
	op_1_kind = "op_1_kind",
	op_1_level = "op_1_level",
	op_2_kind = "op_2_kind",
	op_2_level = "op_2_level",
	signature = "signature",
	status = "status",
	updated_at = "updated_at"
}
/** select columns of table "mempool_endorsement" */
export enum mempool_endorsement_select_column {
	baker = "baker",
	branch = "branch",
	created_at = "created_at",
	errors = "errors",
	expiration_level = "expiration_level",
	hash = "hash",
	kind = "kind",
	level = "level",
	network = "network",
	signature = "signature",
	status = "status",
	updated_at = "updated_at"
}
/** select columns of table "mempool_nonce_revelation" */
export enum mempool_nonce_revelation_select_column {
	branch = "branch",
	created_at = "created_at",
	errors = "errors",
	expiration_level = "expiration_level",
	hash = "hash",
	kind = "kind",
	level = "level",
	network = "network",
	nonce = "nonce",
	signature = "signature",
	status = "status",
	updated_at = "updated_at"
}
/** select columns of table "mempool_origination" */
export enum mempool_origination_select_column {
	balance = "balance",
	branch = "branch",
	counter = "counter",
	created_at = "created_at",
	delegate = "delegate",
	errors = "errors",
	expiration_level = "expiration_level",
	fee = "fee",
	gas_limit = "gas_limit",
	hash = "hash",
	kind = "kind",
	level = "level",
	network = "network",
	signature = "signature",
	status = "status",
	storage = "storage",
	storage_limit = "storage_limit",
	updated_at = "updated_at"
}
/** select columns of table "mempool_proposal" */
export enum mempool_proposal_select_column {
	branch = "branch",
	created_at = "created_at",
	errors = "errors",
	expiration_level = "expiration_level",
	hash = "hash",
	kind = "kind",
	level = "level",
	network = "network",
	period = "period",
	proposals = "proposals",
	signature = "signature",
	status = "status",
	updated_at = "updated_at"
}
/** select columns of table "mempool_reveal" */
export enum mempool_reveal_select_column {
	branch = "branch",
	counter = "counter",
	created_at = "created_at",
	errors = "errors",
	expiration_level = "expiration_level",
	fee = "fee",
	gas_limit = "gas_limit",
	hash = "hash",
	kind = "kind",
	level = "level",
	network = "network",
	public_key = "public_key",
	signature = "signature",
	source = "source",
	status = "status",
	storage_limit = "storage_limit",
	updated_at = "updated_at"
}
/** select columns of table "mempool_transaction" */
export enum mempool_transaction_select_column {
	amount = "amount",
	branch = "branch",
	counter = "counter",
	created_at = "created_at",
	destination = "destination",
	errors = "errors",
	expiration_level = "expiration_level",
	fee = "fee",
	gas_limit = "gas_limit",
	hash = "hash",
	kind = "kind",
	level = "level",
	network = "network",
	parameters = "parameters",
	signature = "signature",
	source = "source",
	status = "status",
	storage_limit = "storage_limit",
	updated_at = "updated_at"
}
/** column ordering options */
export enum order_by {
	asc = "asc",
	asc_nulls_first = "asc_nulls_first",
	asc_nulls_last = "asc_nulls_last",
	desc = "desc",
	desc_nulls_first = "desc_nulls_first",
	desc_nulls_last = "desc_nulls_last"
}
export class GraphQLError extends Error {
    constructor(public response: GraphQLResponse) {
      super("");
      console.error(response);
    }
    toString() {
      return "GraphQL Response Error";
    }
  }


export type UnwrapPromise<T> = T extends Promise<infer R> ? R : T;
export type ZeusState<T extends (...args: any[]) => Promise<any>> = NonNullable<
  UnwrapPromise<ReturnType<T>>
>;
export type ZeusHook<
  T extends (
    ...args: any[]
  ) => Record<string, (...args: any[]) => Promise<any>>,
  N extends keyof ReturnType<T>
> = ZeusState<ReturnType<T>[N]>;

type WithTypeNameValue<T> = T & {
  __typename?: true;
};
type AliasType<T> = WithTypeNameValue<T> & {
  __alias?: Record<string, WithTypeNameValue<T>>;
};
export interface GraphQLResponse {
  data?: Record<string, any>;
  errors?: Array<{
    message: string;
  }>;
}
type DeepAnify<T> = {
  [P in keyof T]?: any;
};
type IsPayLoad<T> = T extends [any, infer PayLoad] ? PayLoad : T;
type IsArray<T, U> = T extends Array<infer R> ? InputType<R, U>[] : InputType<T, U>;
type FlattenArray<T> = T extends Array<infer R> ? R : T;

type NotUnionTypes<SRC extends DeepAnify<DST>, DST> = {
  [P in keyof DST]: SRC[P] extends '__union' & infer R ? never : P;
}[keyof DST];

type ExtractUnions<SRC extends DeepAnify<DST>, DST> = {
  [P in keyof SRC]: SRC[P] extends '__union' & infer R
    ? P extends keyof DST
      ? IsArray<R, DST[P] & { __typename: true }>
      : {}
    : never;
}[keyof SRC];

type IsInterfaced<SRC extends DeepAnify<DST>, DST> = FlattenArray<SRC> extends ZEUS_INTERFACES | ZEUS_UNIONS
  ? ExtractUnions<SRC, DST> &
      {
        [P in keyof Omit<Pick<SRC, NotUnionTypes<SRC, DST>>, '__typename'>]: DST[P] extends true
          ? SRC[P]
          : IsArray<SRC[P], DST[P]>;
      }
  : {
      [P in keyof Pick<SRC, keyof DST>]: DST[P] extends true ? SRC[P] : IsArray<SRC[P], DST[P]>;
    };



export type MapType<SRC, DST> = SRC extends DeepAnify<DST> ? IsInterfaced<SRC, DST> : never;
type InputType<SRC, DST> = IsPayLoad<DST> extends { __alias: infer R }
  ? {
      [P in keyof R]: MapType<SRC, R[P]>;
    } &
      MapType<SRC, Omit<IsPayLoad<DST>, '__alias'>>
  : MapType<SRC, IsPayLoad<DST>>;
type Func<P extends any[], R> = (...args: P) => R;
type AnyFunc = Func<any, any>;
export type ArgsType<F extends AnyFunc> = F extends Func<infer P, any> ? P : never;
export type OperationToGraphQL<V, T> = <Z extends V>(o: Z | V, variables?: Record<string, any>) => Promise<InputType<T, Z>>;
export type SubscriptionToGraphQL<V, T> = <Z extends V>(
  o: Z | V,
  variables?: Record<string, any>,
) => {
  ws: WebSocket;
  on: (fn: (args: InputType<T, Z>) => void) => void;
  off: (e: { data?: InputType<T, Z>; code?: number; reason?: string; message?: string }) => void;
  error: (e: { data?: InputType<T, Z>; message?: string }) => void;
  open: () => void;
};
export type CastToGraphQL<V, T> = (resultOfYourQuery: any) => <Z extends V>(o: Z | V) => InputType<T, Z>;
export type SelectionFunction<V> = <T>(t: T | V) => T;
export type fetchOptions = ArgsType<typeof fetch>;
type websocketOptions = typeof WebSocket extends new (
  ...args: infer R
) => WebSocket
  ? R
  : never;
export type chainOptions =
  | [fetchOptions[0], fetchOptions[1] & {websocket?: websocketOptions}]
  | [fetchOptions[0]];
export type FetchFunction = (
  query: string,
  variables?: Record<string, any>,
) => Promise<any>;
export type SubscriptionFunction = (
  query: string,
  variables?: Record<string, any>,
) => void;
type NotUndefined<T> = T extends undefined ? never : T;
export type ResolverType<F> = NotUndefined<F extends [infer ARGS, any] ? ARGS : undefined>;



export const ZeusSelect = <T>() => ((t: any) => t) as SelectionFunction<T>;

export const ScalarResolver = (scalar: string, value: any) => {
  switch (scalar) {
    case 'String':
      return  `${JSON.stringify(value)}`;
    case 'Int':
      return `${value}`;
    case 'Float':
      return `${value}`;
    case 'Boolean':
      return `${value}`;
    case 'ID':
      return `"${value}"`;
    case 'enum':
      return `${value}`;
    case 'scalar':
      return `${value}`;
    default:
      return false;
  }
};


export const TypesPropsResolver = ({
    value,
    type,
    name,
    key,
    blockArrays
}: {
    value: any;
    type: string;
    name: string;
    key?: string;
    blockArrays?: boolean;
}): string => {
    if (value === null) {
        return `null`;
    }
    let resolvedValue = AllTypesProps[type][name];
    if (key) {
        resolvedValue = resolvedValue[key];
    }
    if (!resolvedValue) {
        throw new Error(`Cannot resolve ${type} ${name}${key ? ` ${key}` : ''}`)
    }
    const typeResolved = resolvedValue.type;
    const isArray = resolvedValue.array;
    const isArrayRequired = resolvedValue.arrayRequired;
    if (typeof value === 'string' && value.startsWith(`ZEUS_VAR$`)) {
        const isRequired = resolvedValue.required ? '!' : '';
        let t = `${typeResolved}`;
        if (isArray) {
          if (isRequired) {
              t = `${t}!`;
          }
          t = `[${t}]`;
          if(isArrayRequired){
            t = `${t}!`;
          }
        }else{
          if (isRequired) {
                t = `${t}!`;
          }
        }
        return `\$${value.split(`ZEUS_VAR$`)[1]}__ZEUS_VAR__${t}`;
    }
    if (isArray && !blockArrays) {
        return `[${value
        .map((v: any) => TypesPropsResolver({ value: v, type, name, key, blockArrays: true }))
        .join(',')}]`;
    }
    const reslovedScalar = ScalarResolver(typeResolved, value);
    if (!reslovedScalar) {
        const resolvedType = AllTypesProps[typeResolved];
        if (typeof resolvedType === 'object') {
        const argsKeys = Object.keys(resolvedType);
        return `{${argsKeys
            .filter((ak) => value[ak] !== undefined)
            .map(
            (ak) => `${ak}:${TypesPropsResolver({ value: value[ak], type: typeResolved, name: ak })}`
            )}}`;
        }
        return ScalarResolver(AllTypesProps[typeResolved], value) as string;
    }
    return reslovedScalar;
};


const isArrayFunction = (
  parent: string[],
  a: any[]
) => {
  const [values, r] = a;
  const [mainKey, key, ...keys] = parent;
  const keyValues = Object.keys(values).filter((k) => typeof values[k] !== 'undefined');

  if (!keys.length) {
      return keyValues.length > 0
        ? `(${keyValues
            .map(
              (v) =>
                `${v}:${TypesPropsResolver({
                  value: values[v],
                  type: mainKey,
                  name: key,
                  key: v
                })}`
            )
            .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
        : traverseToSeekArrays(parent, r);
    }

  const [typeResolverKey] = keys.splice(keys.length - 1, 1);
  let valueToResolve = ReturnTypes[mainKey][key];
  for (const k of keys) {
    valueToResolve = ReturnTypes[valueToResolve][k];
  }

  const argumentString =
    keyValues.length > 0
      ? `(${keyValues
          .map(
            (v) =>
              `${v}:${TypesPropsResolver({
                value: values[v],
                type: valueToResolve,
                name: typeResolverKey,
                key: v
              })}`
          )
          .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
      : traverseToSeekArrays(parent, r);
  return argumentString;
};


const resolveKV = (k: string, v: boolean | string | { [x: string]: boolean | string }) =>
  typeof v === 'boolean' ? k : typeof v === 'object' ? `${k}{${objectToTree(v)}}` : `${k}${v}`;


const objectToTree = (o: { [x: string]: boolean | string }): string =>
  `{${Object.keys(o).map((k) => `${resolveKV(k, o[k])}`).join(' ')}}`;


const traverseToSeekArrays = (parent: string[], a?: any): string => {
  if (!a) return '';
  if (Object.keys(a).length === 0) {
    return '';
  }
  let b: Record<string, any> = {};
  if (Array.isArray(a)) {
    return isArrayFunction([...parent], a);
  } else {
    if (typeof a === 'object') {
      Object.keys(a)
        .filter((k) => typeof a[k] !== 'undefined')
        .map((k) => {
        if (k === '__alias') {
          Object.keys(a[k]).map((aliasKey) => {
            const aliasOperations = a[k][aliasKey];
            const aliasOperationName = Object.keys(aliasOperations)[0];
            const aliasOperation = aliasOperations[aliasOperationName];
            b[
              `${aliasOperationName}__alias__${aliasKey}: ${aliasOperationName}`
            ] = traverseToSeekArrays([...parent, aliasOperationName], aliasOperation);
          });
        } else {
          b[k] = traverseToSeekArrays([...parent, k], a[k]);
        }
      });
    } else {
      return '';
    }
  }
  return objectToTree(b);
};  


const buildQuery = (type: string, a?: Record<any, any>) => 
  traverseToSeekArrays([type], a);


const inspectVariables = (query: string) => {
  const regex = /\$\b\w*__ZEUS_VAR__\[?[^!^\]^\s^,^\)^\}]*[!]?[\]]?[!]?/g;
  let result;
  const AllVariables: string[] = [];
  while ((result = regex.exec(query))) {
    if (AllVariables.includes(result[0])) {
      continue;
    }
    AllVariables.push(result[0]);
  }
  if (!AllVariables.length) {
    return query;
  }
  let filteredQuery = query;
  AllVariables.forEach((variable) => {
    while (filteredQuery.includes(variable)) {
      filteredQuery = filteredQuery.replace(variable, variable.split('__ZEUS_VAR__')[0]);
    }
  });
  return `(${AllVariables.map((a) => a.split('__ZEUS_VAR__'))
    .map(([variableName, variableType]) => `${variableName}:${variableType}`)
    .join(', ')})${filteredQuery}`;
};


export const queryConstruct = (t: 'query' | 'mutation' | 'subscription', tName: string) => (o: Record<any, any>) =>
  `${t.toLowerCase()}${inspectVariables(buildQuery(tName, o))}`;
  

const fullChainConstruct = (fn: FetchFunction) => (t: 'query' | 'mutation' | 'subscription', tName: string) => (
  o: Record<any, any>,
  variables?: Record<string, any>,
) => fn(queryConstruct(t, tName)(o), variables).then((r:any) => { 
  seekForAliases(r)
  return r
});

export const fullChainConstructor = <F extends FetchFunction, R extends keyof ValueTypes>(
  fn: F,
  operation: 'query' | 'mutation' | 'subscription',
  key: R,
) =>
  ((o, variables) => fullChainConstruct(fn)(operation, key)(o as any, variables)) as OperationToGraphQL<
    ValueTypes[R],
    GraphQLTypes[R]
  >;


const fullSubscriptionConstruct = (fn: SubscriptionFunction) => (
  t: 'query' | 'mutation' | 'subscription',
  tName: string,
) => (o: Record<any, any>, variables?: Record<string, any>) =>
  fn(queryConstruct(t, tName)(o), variables);

export const fullSubscriptionConstructor = <F extends SubscriptionFunction, R extends keyof ValueTypes>(
  fn: F,
  operation: 'query' | 'mutation' | 'subscription',
  key: R,
) =>
  ((o, variables) => fullSubscriptionConstruct(fn)(operation, key)(o as any, variables)) as SubscriptionToGraphQL<
    ValueTypes[R],
    GraphQLTypes[R]
  >;


const seekForAliases = (response: any) => {
  const traverseAlias = (value: any) => {
    if (Array.isArray(value)) {
      value.forEach(seekForAliases);
    } else {
      if (typeof value === 'object') {
        seekForAliases(value);
      }
    }
  };
  if (typeof response === 'object' && response) {
    const keys = Object.keys(response);
    if (keys.length < 1) {
      return;
    }
    keys.forEach((k) => {
      const value = response[k];
      if (k.indexOf('__alias__') !== -1) {
        const [operation, alias] = k.split('__alias__');
        response[alias] = {
          [operation]: value,
        };
        delete response[k];
      }
      traverseAlias(value);
    });
  }
};


export const $ = (t: TemplateStringsArray): any => `ZEUS_VAR$${t.join('')}`;


export const resolverFor = <
  T extends keyof ValueTypes,
  Z extends keyof ValueTypes[T],
  Y extends (
    args: Required<ValueTypes[T]>[Z] extends [infer Input, any] ? Input : any,
    source: any,
  ) => Z extends keyof ModelTypes[T] ? ModelTypes[T][Z] | Promise<ModelTypes[T][Z]> : any
>(
  type: T,
  field: Z,
  fn: Y,
) => fn as (args?: any,source?: any) => any;


const handleFetchResponse = (
  response: Parameters<Extract<Parameters<ReturnType<typeof fetch>['then']>[0], Function>>[0]
): Promise<GraphQLResponse> => {
  if (!response.ok) {
    return new Promise((_, reject) => {
      response.text().then(text => {
        try { reject(JSON.parse(text)); }
        catch (err) { reject(text); }
      }).catch(reject);
    });
  }
  return response.json();
};

export const apiFetch = (options: fetchOptions) => (query: string, variables: Record<string, any> = {}) => {
    let fetchFunction = fetch;
    let queryString = query;
    let fetchOptions = options[1] || {};
    if (fetchOptions.method && fetchOptions.method === 'GET') {
      queryString = encodeURIComponent(query);
      return fetchFunction(`${options[0]}?query=${queryString}`, fetchOptions)
        .then(handleFetchResponse)
        .then((response: GraphQLResponse) => {
          if (response.errors) {
            throw new GraphQLError(response);
          }
          return response.data;
        });
    }
    return fetchFunction(`${options[0]}`, {
      body: JSON.stringify({ query: queryString, variables }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      ...fetchOptions
    })
      .then(handleFetchResponse)
      .then((response: GraphQLResponse) => {
        if (response.errors) {
          throw new GraphQLError(response);
        }
        return response.data;
      });
  };
  

export const apiSubscription = (options: chainOptions) => (
    query: string,
    variables: Record<string, any> = {},
  ) => {
    try {
      const queryString = options[0] + '?query=' + encodeURIComponent(query);
      const wsString = queryString.replace('http', 'ws');
      const host = (options.length > 1 && options[1]?.websocket?.[0]) || wsString;
      const webSocketOptions = options[1]?.websocket || [host];
      const ws = new WebSocket(...webSocketOptions);
      return {
        ws,
        on: (e: (args: any) => void) => {
          ws.onmessage = (event:any) => {
            if(event.data){
              const parsed = JSON.parse(event.data)
              const data = parsed.data
              if (data) {
                seekForAliases(data);
              }
              return e(data);
            }
          };
        },
        off: (e: (args: any) => void) => {
          ws.onclose = e;
        },
        error: (e: (args: any) => void) => {
          ws.onerror = e;
        },
        open: (e: () => void) => {
          ws.onopen = e;
        },
      };
    } catch {
      throw new Error('No websockets implemented');
    }
  };


export const Thunder = (fn: FetchFunction, subscriptionFn: SubscriptionFunction) => ({
  query: fullChainConstructor(fn,'query', 'query_root'),
subscription: fullSubscriptionConstructor(subscriptionFn,'subscription', 'subscription_root')
});

export const Chain = (...options: chainOptions) => ({
  query: fullChainConstructor(apiFetch(options),'query', 'query_root'),
subscription: fullSubscriptionConstructor(apiSubscription(options),'subscription', 'subscription_root')
});
export const Zeus = {
  query: (o:ValueTypes["query_root"]) => queryConstruct('query', 'query_root')(o),
subscription: (o:ValueTypes["subscription_root"]) => queryConstruct('subscription', 'subscription_root')(o)
};
export const Cast = {
  query: ((o: any) => (_: any) => o) as CastToGraphQL<
  ValueTypes["query_root"],
  GraphQLTypes["query_root"]
>,
subscription: ((o: any) => (_: any) => o) as CastToGraphQL<
  ValueTypes["subscription_root"],
  GraphQLTypes["subscription_root"]
>
};
export const Selectors = {
  query: ZeusSelect<ValueTypes["query_root"]>(),
subscription: ZeusSelect<ValueTypes["subscription_root"]>()
};
  

export const Gql = Chain('https://api.dipdup.net/mempool/graphql')