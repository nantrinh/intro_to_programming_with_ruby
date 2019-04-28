var paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed \
                ligula at risus vulputate faucibus. Aliquam venenatis nibh ut justo dignissim \
                dignissim. Proin dictum purus mollis diam auctor sollicitudin. Ut in bibendum \
                ligula. Suspendisse quam ante, dictum aliquam tristique id, porttitor pulvinar \
                diam. Maecenas blandit aliquet ipsum. Integer vitae sapien sed nulla rutrum \
                hendrerit ac a urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.';

console.log(paragraph);
// The code will throw a SyntaxError.
// There are extra spaces after line 5, but it's hard to see by looking at it.
// If you fix this, there are extra spaces at the beginning of lines 2 through 6 that get
// printed out because JS assumes they are part of the string.
// Better to use concatenation to avoid this mistake.
