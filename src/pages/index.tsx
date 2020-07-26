import App from '../components/App'
import { ResponsiveRadar } from '@nivo/radar'

const MyResponsiveRadar = ({ data /* see data tab */ }) => (
  <ResponsiveRadar
    data={data}
    keys={['chardonay', 'carmenere', 'syrah']}
    indexBy="taste"
    maxValue="auto"
    margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
    curve="linearClosed"
    borderWidth={2}
    borderColor={{ from: 'color' }}
    gridLevels={5}
    gridShape="circular"
    gridLabelOffset={36}
    enableDots={true}
    dotSize={10}
    dotColor={{ theme: 'background' }}
    dotBorderWidth={2}
    dotBorderColor={{ from: 'color' }}
    enableDotLabel={true}
    dotLabel="value"
    dotLabelYOffset={-12}
    colors={{ scheme: 'nivo' }}
    fillOpacity={0.25}
    blendMode="multiply"
    animate={true}
    motionStiffness={90}
    motionDamping={15}
    isInteractive={true}
    legends={[
      {
        anchor: 'top-left',
        direction: 'column',
        translateX: -50,
        translateY: -40,
        itemWidth: 80,
        itemHeight: 20,
        itemTextColor: '#999',
        symbolSize: 12,
        symbolShape: 'circle',
        effects: [
          {
            on: 'hover',
            style: {
              itemTextColor: '#000',
            },
          },
        ],
      },
    ]}
  />
)

export default function Home() {
  return (
    <App>
      <div style={{ width: 400, height: 400 }}>
        <MyResponsiveRadar
          data={[
            {
              taste: 'fruity',
              chardonay: 119,
              carmenere: 66,
              syrah: 21,
            },
            {
              taste: 'bitter',
              chardonay: 102,
              carmenere: 105,
              syrah: 104,
            },
            {
              taste: 'heavy',
              chardonay: 71,
              carmenere: 84,
              syrah: 82,
            },
            {
              taste: 'strong',
              chardonay: 117,
              carmenere: 94,
              syrah: 20,
            },
            {
              taste: 'sunny',
              chardonay: 41,
              carmenere: 57,
              syrah: 20,
            },
          ]}
        />
      </div>
      <p>ssss</p>
    </App>
  )
}
