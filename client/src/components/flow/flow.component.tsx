import 'reactflow/dist/style.css';
import { FC, ReactElement } from 'react';
import { Background, ReactFlow } from 'reactflow';
import { FlowContainer } from '@components/flow/flow.css.ts';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { FlowDetailQuery } from '@graphql/freeflow/flow.query.ts';

const Flow: FC = (): ReactElement => {
    const { flowId } = useParams<{ flowId: string }>();
    const {data} = useQuery(FlowDetailQuery, {
        variables: {
            where: {
                id: flowId,
            }
        }
    })
    return (
        <ReactFlow
            nodes={data?.flow.data}
            className={FlowContainer}
        >
            <Background />
        </ReactFlow>
    );
};

export default Flow;
