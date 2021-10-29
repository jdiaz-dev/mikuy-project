import { QuerySpecification } from '@liberation-data/drivine';
import { ObjectUtils } from '@liberation-data/drivine/utils';

export const createCypherQuery = (_properties: any, statement: string, nameProps: string, nodeIds?: {}) => {
    const properties = ObjectUtils.primitiveProps(_properties);
    const parameters = {
        ...nodeIds,
    };
    parameters[nameProps] = properties;
    const query = new QuerySpecification(statement).bind(parameters);
    return query;
};
