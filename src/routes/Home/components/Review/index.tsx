import { Grid, Typography, Select, Image } from '@nest-ui/core';
import { StarFilled, Information, MenuKebabVertical, ThumbFilled, ChevronDown } from '@nest-ui/icon';
import { GN500, NN600, YN300, NN100, NN700 } from '@tokopedia/nest-color';

const OPTIONS = [
  { value: 'terbaru', label: 'Terbaru' },
  { value: 'ratingtertinggi', label: 'Rating Tertinggi' },
  { value: 'ratingterendah', label: 'Rating Terendah' },
];

const Review = () => {
  return (
    <section id="ulasan" css={{ scrollMarginTop: 200 }}>
      <Typography as="h2" variant="display1" css={{ margin: '0 0 1.25rem' }}>
        <strong>ULASAN PEMBELI</strong>
      </Typography>
      <Grid>
        <Grid.Col span="auto">
          <Grid>
            <Grid.Col span="auto" alignSelf="middle">
              <StarFilled color={YN300} />
            </Grid.Col>
            <Grid.Col>
              <Typography css={{ fontSize: '3.75rem' }}>5.0</Typography>/
              <Typography css={{ color: NN600 }}>5.0</Typography>
            </Grid.Col>
          </Grid>
          <Grid>
            <Grid.Col>
              <Typography variant="display3">
                <strong>100% pembeli merasa puas</strong>
                <Information size={16} css={{ marginLeft: 4 }} />
              </Typography>
            </Grid.Col>
          </Grid>
          <Grid justify="center">
            <Typography variant="display3" css={{ color: NN600 }}>
              1 rating • 1 ulasan
            </Typography>
          </Grid>
          <div css={{ marginTop: 16 }}>
            <Grid>
              <Grid.Col span="auto">
                <StarFilled size={10} color={YN300} css={{ marginTop: '-2px' }} />
              </Grid.Col>
              <Grid.Col span="auto">
                <Typography variant="display2" css={{ fontWeight: 'bold', color: NN600 }}>
                  5
                </Typography>
              </Grid.Col>
              <Grid.Col alignSelf="middle">
                <div css={{ backgroundColor: GN500, height: 6, borderRadius: 4 }}></div>
              </Grid.Col>
              <Grid.Col span="auto">
                <Typography css={{ color: NN600 }} variant="display3">
                  1
                </Typography>
              </Grid.Col>
            </Grid>
            <Grid>
              <Grid.Col span="auto">
                <StarFilled size={10} color={YN300} css={{ marginTop: '-2px' }} />
              </Grid.Col>
              <Grid.Col span="auto">
                <Typography variant="display2" css={{ fontWeight: 'bold', color: NN600 }}>
                  4
                </Typography>
              </Grid.Col>
              <Grid.Col alignSelf="middle">
                <div css={{ backgroundColor: NN100, height: 6, borderRadius: 4 }}></div>
              </Grid.Col>
              <Grid.Col span="auto">
                <Typography css={{ color: NN600 }} variant="display3">
                  0
                </Typography>
              </Grid.Col>
            </Grid>
            <Grid>
              <Grid.Col span="auto">
                <StarFilled size={10} color={YN300} css={{ marginTop: '-2px' }} />
              </Grid.Col>
              <Grid.Col span="auto">
                <Typography variant="display2" css={{ fontWeight: 'bold', color: NN600 }}>
                  3
                </Typography>
              </Grid.Col>
              <Grid.Col alignSelf="middle">
                <div css={{ backgroundColor: NN100, height: 6, borderRadius: 4 }}></div>
              </Grid.Col>
              <Grid.Col span="auto">
                <Typography css={{ color: NN600 }} variant="display3">
                  0
                </Typography>
              </Grid.Col>
            </Grid>
            <Grid>
              <Grid.Col span="auto">
                <StarFilled size={10} color={YN300} css={{ marginTop: '-2px' }} />
              </Grid.Col>
              <Grid.Col span="auto">
                <Typography variant="display2" css={{ fontWeight: 'bold', color: NN600 }}>
                  2
                </Typography>
              </Grid.Col>
              <Grid.Col alignSelf="middle">
                <div css={{ backgroundColor: NN100, height: 6, borderRadius: 4 }}></div>
              </Grid.Col>
              <Grid.Col span="auto">
                <Typography css={{ color: NN600 }} variant="display3">
                  0
                </Typography>
              </Grid.Col>
            </Grid>
            <Grid>
              <Grid.Col span="auto">
                <StarFilled size={10} color={YN300} css={{ marginTop: '-2px' }} />
              </Grid.Col>
              <Grid.Col span="auto">
                <Typography variant="display2" css={{ fontWeight: 'bold', color: NN600 }}>
                  1
                </Typography>
              </Grid.Col>
              <Grid.Col alignSelf="middle">
                <div css={{ backgroundColor: NN100, height: 6, borderRadius: 4 }}></div>
              </Grid.Col>
              <Grid.Col span="auto">
                <Typography css={{ color: NN600 }} variant="display3">
                  0
                </Typography>
              </Grid.Col>
            </Grid>
          </div>
        </Grid.Col>
        <Grid.Col span={1}></Grid.Col>
        <Grid.Col>
          <Grid>
            <Grid.Col>
              <Typography variant="display2" css={{ display: 'block' }}>
                <strong>ULASAN PILIHAN</strong>
              </Typography>
              <Typography variant="display3">Menampilkan 1 dari 1 ulasan</Typography>
            </Grid.Col>
            <Grid.Col span="auto">
              <Typography variant="display3">
                <strong>Urutkan</strong>
              </Typography>
              <Select
                options={OPTIONS}
                defaultValue={OPTIONS[0].value}
                css={{ marginLeft: 8, display: 'inline-block' }}
              />
            </Grid.Col>
          </Grid>
          <Grid css={{ marginTop: 32 }}>
            <Grid.Col alignSelf="middle">
              <span>
                <StarFilled size={15} css={{ marginTop: '-2px' }} color={YN300} />
                <StarFilled size={15} css={{ marginTop: '-2px' }} color={YN300} />
                <StarFilled size={15} css={{ marginTop: '-2px' }} color={YN300} />
                <StarFilled size={15} css={{ marginTop: '-2px' }} color={YN300} />
                <StarFilled size={15} css={{ marginTop: '-2px' }} color={YN300} />
              </span>
              <Typography css={{ color: NN600, marginLeft: 8 }}>2 Bulan lalu</Typography>
            </Grid.Col>
            <Grid.Col span="auto">
              <MenuKebabVertical />
            </Grid.Col>
          </Grid>
          <Grid>
            <Grid.Col span="auto">
              <Image
                edge="circle"
                width={32}
                alt="logo user"
                src="https://images.tokopedia.net/img/cache/100-square/default_v3-usrnophoto.png.webp?ect=4g"
              />
            </Grid.Col>
            <Grid.Col alignSelf="middle">
              <Typography css={{ fontWeight: 'bold' }}>Y***a</Typography>
            </Grid.Col>
          </Grid>
          <Grid css={{ marginTop: 8 }}>
            <Grid.Col>
              <Typography>seller gercep, packing rapi & aman.. barang sesuai dengan deskripsi</Typography>
            </Grid.Col>
          </Grid>
          <Grid css={{ marginTop: 32 }}>
            <Grid.Col>
              <ThumbFilled color={NN700} size={16} css={{ marginTop: '-3px' }} />
              <Typography>Membantu</Typography>
            </Grid.Col>
            <Grid.Col span="auto">
              <Typography>
                Lihat balasan <ChevronDown />
              </Typography>
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </section>
  );
};

export default Review;
