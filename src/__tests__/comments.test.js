const { default: App } = require('components/App');
const { mount } = require('enzyme');
const moxios = require('moxios');
const { default: Root } = require('Root');

beforeEach(() => {
  moxios.install();

  const urlToMock = 'http://jsonplaceholder.typicode.com/comments';
  const mockResponse = [
    {
      name: 'comment1',
      id: 1,
    },
    {
      name: 'comment2',
      id: 2,
    },
  ];
  moxios.stubRequest(urlToMock, {
    status: 200,
    response: mockResponse,
  });
});

afterEach(() => {
  moxios.uninstall(); // cleanup
});

it('can fetch a list of comments and list them', (done) => {
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  wrapped.find('.fetch-comments').simulate('click');

  // introduce some pause here to let moxios interrupt and send a mock response (2 approaches)
  // Approach 1
  /*
  setTimeout(() => {
    wrapped.update();

    expect(wrapped.find('li').length).toEqual(2);

    done(); // tells jest that we are done with the test. Until this is called, jest won't throw a failure because we have mentioned it inside the callback function

    wrapped.unmount();
  }, 100);
  */

  // Approach 2
  moxios.wait(() => {
    wrapped.update();

    expect(wrapped.find('li').length).toEqual(2);

    done();

    wrapped.unmount();
  })
});
