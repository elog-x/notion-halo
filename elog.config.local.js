module.exports = {
  write: {
    platform: 'notion',
    notion: {
      token: process.env.NOTION_TOKEN,
      databaseId: process.env.NOTION_DATABASE_ID,
      filter: { property: 'status', select: { equals: '已发布' }}
    }
  },
  deploy: {
    platform: 'local',
    local: {
      outputDir: './docs',
      filename: 'title',
      format: 'markdown',
      frontMatter: {
        enable: true,
        exclude: ['cover']
      }
    }
  },
  image: {
    enable: true,
    platform: 'local',
    local: {
      outputDir: './images',
      pathFollowDoc: true,
    }
  }
}
