import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './burgers.css'


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    return (
        <Box sx={{ width: '100%' }} >
            <Box sx={{ marginRight: 10 }}  >
                <Tabs id='menu' className='style__tab--menu' value={value} onChange={handleChange}  >
                    <Tab label="BURGERS" {...a11yProps(0)} />
                    <Tab label="SIDES & EXTRAS" {...a11yProps(1)} />
                    <Tab label="EXTRA STUFF" {...a11yProps(2)} />
                    <Tab label="DRINKS" {...a11yProps(3)} />
                </Tabs>
            </Box>
            <TabPanel className="style__tab" value={value} index={0} >
                <div className='section__menu'>
                    <div>
                        <h4>MARIO</h4>
                        <p>Tomato, lettuce, red onion, pickle & burgr mayo</p>
                        <p>(W, M, SO, EG, MU)</p>
                        <h6>144,-</h6>
                    </div>

                    <div>
                        <h4>SUPER MARIO</h4>
                        <p>Tomato, lettuce, red onion, pickle, fennel salami & truffle mayo</p>
                        <p>(W, M, EG, SE)</p>
                        <h6>164,-</h6>
                    </div>

                    <div>
                        <h4>WARIO</h4>
                        <p>Pickled red onion, lettuce, grilled pineapple, blue cheese & burgr mayo</p>
                        <p>(W, M, SO, EG, SE)</p>
                        <h6>174,-</h6>
                    </div>

                    <div>
                        <h4>BULLET BILL</h4>
                        <p>Smoked cheddar, beer cooked bacon, pickle, crispy onion & BBQ sauce</p>
                        <p>(W, M, F, EG, SEL)</p>
                        <h6>174,-</h6>
                    </div>

                    <div>
                        <h4>THE MUNCHER</h4>
                        <p>Cheddar, beer cooked bacon, pickled red onion, fresh horseraddish and aioli</p>
                        <p>(W, M, EG, SE)</p>
                        <h6>174,-</h6>
                    </div>

                    <div>
                        <h4>CHOP CHOP MASTER ONION</h4>
                        <p>Onion rings, onion marmalade, lettuce & roasted garlic mayo</p>
                        <p>(W, M, F, EG, SEL)</p>
                        <h6>164,-</h6>
                    </div>

                    <div>
                        <h4>BOWSER</h4>
                        <p>Spicy salsa, fefferoni (pickled green chili), lettuce & jalapeño mayo</p>
                        <p>(W, M, EG, SE)</p>
                        <h6>154,-</h6>
                    </div>

                    <div>
                        <h4>DOOM</h4>
                        <p>Cheddar cheese, tomato, lettuce, red onion, fefferoni & habanero mayo</p>
                        <p>(W, M, EG, SE)</p>
                        <h6>154,-</h6>
                    </div>

                    <div>
                        <h4>JASMINE</h4>
                        <p>Tomato, lettuce, red onion, pickle & mint yoghurt sauce
                            Vegan</p>
                        <p>(W, M, EG, SES)</p>
                        <h6>144,-</h6>
                    </div>
                </div>
            </TabPanel>
            <TabPanel className="style__tab" value={value} index={1}>
                <div className='section__menu'>
                    <div>
                        <h4>POTATO FRIES (POMMES FRITES)</h4>
                        <p>Fresh cut potatoes, fried in rapeseed oil. Served with GARLIC MAYO DIP</p>
                        <p>(EG, SE)</p>
                        <h6>62,-</h6>
                    </div>

                    <div>
                        <h4>ONION RINGS (LØKRINGER)</h4>
                        <p>Fried onion rings in beer better with GARLIC MAYO</p>
                        <p>(W, EG, SE)</p>
                        <h6>62,-</h6>
                    </div>

                    <div>
                        <h4>CRISPS (POTETGULL)</h4>
                        <p>Potato crisps with GARLIC MAYO</p>
                        <p>(W, EG, SE)</p>
                        <h6>42,-</h6>
                    </div>

                    <div>
                        <h4>ASTROIDS (CHILI CHEESE NUGGETS)</h4>
                        <p>Potato crisps with GARLIC MAYO</p>
                        <p>(EG, SE)</p>
                        <h6>56,-</h6>
                    </div>

                    <div>
                        <h4>KIMCHI</h4>
                        <p>Fermented cabbage salad from the HILDR kitchen. A bit spicy, and a whole lot of healthy!</p>
                        <h6>62,-</h6>
                    </div>
                </div>
            </TabPanel>
            <TabPanel className="style__tab" value={value} index={2}>
                <div className='section__menu'>
                    <div>
                        <h4>EXTRA BURGER (+150 G)</h4>
                        <h6>80,-</h6>
                    </div>

                    <div>
                        <h4>BACON (BEET COOKED)</h4>
                        <h6>28,-</h6>
                    </div>

                    <div>
                        <h4>CHEDDAR (CHEESE)</h4>
                        <h6>24,-</h6>
                    </div>

                    <div>
                        <h4>CHEESE & BACON</h4>
                        <h6>46.-</h6>
                    </div>

                    <div>
                        <h4>BLUE CHEESE</h4>
                        <h6>26,-</h6>
                    </div>

                    <div>
                        <h4>PICKLED CUCUMBER</h4>
                        <h6>12,-</h6>
                    </div>

                    <div>
                        <h4>PICKLED RED ONION</h4>
                        <h6>12,-</h6>
                    </div>

                    <div>
                        <h4>GRILLED FRESH PINEAPPLE</h4>
                        <h6>12,-</h6>
                    </div>

                    <div>
                        <h4>EXTRA DIP</h4>
                        <h6>16,-</h6>
                    </div>

                    <div>
                        <h4>GLUTEN FREE BREAD</h4>
                        <h6>20,-</h6>
                    </div>
                </div>
            </TabPanel>
            <TabPanel className="style__tab" value={value} index={3}>
                <div className='section__menu'>
                    <div>
                        <h4>FRITZ-KOLA</h4>
                        <p>0,33L</p>
                        <p>German hipster soda. Some are even vegan. Ask us, or check shelf behind bar for current flavours.</p>
                        <h6>56,-</h6>
                    </div>

                    <div>
                        <h4>GINGER BEER</h4>
                        <p>0,28L</p>
                        <h6>56,-</h6>
                    </div>

                    <div>
                        <h4>JUICE</h4>
                        <p>Kuli</p>
                        <h6>28,-</h6>
                    </div>

                    <div>
                        <h4>MILKSHAKE</h4>
                        <p>Vanilla, chocolate, strawberry, banana & vanilla, liquorice & vanilla</p>
                        <p>A creamy milkshake is a good sidekick to a Burgr. The recipe is simple: Ice cream + Milk + Magic</p>
                        <h6>82,-</h6>
                    </div>

                    <p>AND A LOT OF OTHER NICE DRINKS!
                    </p>

                </div>
            </TabPanel>
        </Box >
    );
}