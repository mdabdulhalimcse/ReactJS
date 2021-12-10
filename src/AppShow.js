import React from 'react';
import Bracket from './componets/composition/Bracket';
import Emoji from './componets/composition/Emoji';
import Text from './componets/composition/Text';

function AppShow(){
    return(
//{/* <Emoji>{({ addEmoji }) => <Text addEmoji={addEmoji} />}</Emoji> */}
<Emoji>
    {({addEmoji}) =>(
        <Bracket>
        {({addBracket}) => <Text addEmoji={addEmoji} addBracket={addBracket} />}
        </Bracket>
    )

    }
</Emoji>
    );
}
export default AppShow;