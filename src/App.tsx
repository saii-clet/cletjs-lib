import { Card, StyledBody, StyledAction } from 'baseui/card';
import { Cell, Grid } from 'baseui/layout-grid';
import {
  DisplayMedium,
  ParagraphMedium,
  ParagraphSmall,
} from 'baseui/typography';
import { Heading, HeadingLevel } from 'baseui/heading';
import { Button } from 'baseui/button';
import { Input } from 'baseui/input';
import { clet } from 'clet-js';
import { useState } from 'react';
import { useStyletron } from 'baseui';

function App() {
  const [css] = useStyletron();
  const [cletName, setCletName] = useState('');
  const [results, setResults] = useState({
    resolve: '',
    reverse: '',
    exists: false,
  });

  return (
    <>
      <div className={css({ width: '100%', maxWidth: '42rem' })}>
        <Grid>
          <Cell span={[4, 8, 12]}>
            <div
              className={css({
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '.5rem',
              })}
            >
              <div>
                <DisplayMedium marginBottom='scale500' marginTop='scale1200'>
                  Clet JS
                </DisplayMedium>
                <ParagraphMedium>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  cumque quia incidunt eius veritatis quae. Incidunt ut libero
                  quis est sit, perspiciatis corporis aut vel aliquam sequi?
                  Inventore, aliquam fugiat!
                </ParagraphMedium>
                <div className={css({ paddingTop: '2rem' })}>
                  <HeadingLevel>
                    <Heading styleLevel={3}>Resolve a clet name</Heading>
                    <ParagraphSmall>
                      Vivamus vehicula justo suscipit, vestibulum nibh eu,
                      faucibus nisi. Aenean molestie sapien nibh, sed sagittis
                      turpis iaculis id. Nam mollis pulvinar ex eget gravida.
                      Pellentesque fringilla odio a consequat condimentum.
                      Curabitur ut auctor mi. Nunc blandit, tellus quis
                      fringilla sollicitudin, risus libero scelerisque lorem, ut
                      sagittis risus ipsum in nisl.
                    </ParagraphSmall>
                    <Card>
                      <StyledBody>
                        Proin ut dui sed metus pharetra hend rerit vel non mi.
                        Nulla ornare faucibus ex, non facilisis nisl. Proin ut
                        dui sed metus pharetra hend rerit vel non mi. Nulla
                        ornare faucibus ex, non facilisis nisl.
                        <Input
                          value={cletName}
                          onChange={(event) =>
                            setCletName(event.currentTarget.value)
                          }
                          placeholder='Enter a clet name'
                          clearable
                        />
                        {results.resolve && (
                          <ParagraphMedium color='positive400'>
                            Address: {results.resolve}
                          </ParagraphMedium>
                        )}
                      </StyledBody>
                      <StyledAction>
                        <Button
                          overrides={{
                            BaseButton: { style: { width: '100%' } },
                          }}
                          onClick={() => {
                            void clet
                              .resolve(cletName)
                              .then((res) =>
                                setResults({
                                  ...results,
                                  resolve: res.address,
                                })
                              )
                              .catch((error) => console.error(error));
                          }}
                        >
                          Resolve
                        </Button>
                      </StyledAction>
                    </Card>
                  </HeadingLevel>
                </div>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    </>
  );
}

export default App;
