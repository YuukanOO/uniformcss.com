module.exports = function (eleventyConfig) {
  let { DateTime } = require("luxon");
  let pluginRss = require("@11ty/eleventy-plugin-rss");
  let pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
  let pluginNavigation = require("@11ty/eleventy-navigation");
  let markdownIt = require("markdown-it");
  let markdownItContainer = require("markdown-it-container");
  let markdownItAttrs = require("markdown-it-attrs");
  let markdownItAnchor = require("markdown-it-anchor");
  let pluginTOC = require("eleventy-plugin-toc");
  let { PurgeCSS } = require("purgecss");

  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.addPlugin(pluginNavigation);
  eleventyConfig.addPlugin(pluginTOC);

  eleventyConfig.addTransform(
    "purge-and-inline-css",
    async (content, outputPath) => {
      if (
        process.env.ELEVENTY_ENV !== "production" ||
        !outputPath.endsWith(".html")
      ) {
        return content;
      }

      const purgeCSSResults = await new PurgeCSS().purge({
        content: [{ raw: content }],
        css: ["assets/css/styles.css"],
        keyframes: true,
        defaultExtractor: (content) => {
          // Capture as liberally as possible, including things like `h-(screen-1.5)`
          const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];

          // Capture classes within other delimiters like .block(class="w-1/2") in Pug
          const innerMatches =
            content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];

          return broadMatches.concat(innerMatches);
        },
      });

      return content.replace(
        "<!-- INLINE CSS-->",
        "<style>" + purgeCSSResults[0].css + "</style>"
      );
    }
  );

  // https://www.11ty.dev/docs/data-deep-merge/
  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "dd LLL yyyy"
    );
  });

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter("head", (array, n) => {
    if (n < 0) {
      return array.slice(n);
    }
    return array.slice(0, n);
  });

  eleventyConfig.addCollection("tagList", function (collection) {
    let tagSet = new Set();
    collection.getAll().forEach(function (item) {
      if ("tags" in item.data) {
        let tags = item.data.tags;

        tags = tags.filter(function (item) {
          switch (item) {
            // this list should match the `filter` list in tags.njk
            case "all":
            case "nav":
            case "post":
            case "posts":
              return false;
          }

          return true;
        });

        for (const tag of tags) {
          tagSet.add(tag);
        }
      }
    });

    // returning an array in addCollection works in Eleventy 0.5.3
    return [...tagSet];
  });

  eleventyConfig.addPassthroughCopy("assets/");

  /* Markdown Overrides */
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
  });

  eleventyConfig.setLibrary(
    "md",
    markdownLibrary
      .use(markdownItAnchor, {
        permalink: true,
        permalinkClass: "direct-link",
        permalinkSymbol: "",
      })
      .use(require("markdown-it-attrs"))
      .use(require("markdown-it-container"), "", {
        validate: () => true,
        render: (tokens, idx) => {
          if (tokens[idx].nesting === 1) {
            const classList = tokens[idx].info.trim();
            return `<div ${classList && `class="${classList}"`}>`;
          } else {
            return `</div>`;
          }
        },
      })
  );

  eleventyConfig.addFilter("markdownify", (content) => {
    let markdownify = markdownIt({
      html: true,
      breaks: true,
      linkify: true,
    }).use(markdownItAnchor, {
      permalink: true,
      permalinkClass: "direct-link",
      permalinkSymbol: "#",
    });
    return markdownify.render(content);
  });

  eleventyConfig.addFilter("markdownInline", (content) => {
    let markdownInline = markdownIt({
      html: true,
      breaks: true,
      linkify: true,
    }).use(markdownItAnchor, {
      permalink: true,
      permalinkClass: "direct-link",
      permalinkSymbol: "#",
    });
    return markdownInline.renderInline(content);
  });

  eleventyConfig.addPairedLiquidShortcode(
    "section",
    function (content, firstName, lastName) {
      return `<h1>${content}</h1>`;
    }
  );
};
